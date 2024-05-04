import { useState, useEffect } from "react";
import {
  Button,
  Input,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import axiosService from "../../utils/axios";

const CreateProperty = () => {
  const [inputFields, setInputFields] = useState([{ image: "", text: "" }]);
  const [previewImages, setPreviewImages] = useState([]);
  const [image, setImage] = useState({});
  const [data, setData] = useState({});
  const [coordinates, setCoordinates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sections, setSections] = useState([]);
  const [category, setCategory] = useState("");
  const [section, setSection] = useState("");

  const success = (position) => {
    // console.log("Position: ", position.coords);
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude);
    setCoordinates([latitude, longitude]);
  };
  const error = (err) => {
    console.log("Error: ", err.message);
  };

  //  Get users Coordinates
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    });
  }, []);

  // Get all category
  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const res = await axiosService.get("/category");
        setCategories([...res.data.data]);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCategories();
  }, []);

  // Get sections based on category
  const getSectionFromCategory = async (categoryId) => {
    console.log("ID: ", categoryId);
    try {
      const res = await axiosService.get(`/category/${categoryId}/section`);
      setSections([...res.data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event);
    getSectionFromCategory(event);
  };

  const handleAddField = () => {
    if (inputFields.length >= 8) {
      return alert("Max upload is 8");
    }
    setInputFields([...inputFields, { image: "", text: "" }]);
    console.log(inputFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleFieldChange = (event, index) => {
    const { name, value, files } = event.target;
    const values = [...inputFields];
    // console.log(values, index);
    if (name === "image") {
      values[index][name] = files[0];
      setPreviewImages([
        ...previewImages,
        URL.createObjectURL(values[index][name]),
      ]);
    } else {
      values[index][name] = value;
      setInputFields(values);
    }
  };

  // name, address, image, images(max: 8), description(array), summary
  // Google map: location: { coordinates: [a, b], address, description }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, address, summary, description } = data;
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("image", image);
    formdata.append("address", address);
    formdata.append("summary", summary);
    formdata.append("description", description);
    formdata.append("latlng", coordinates);
    formdata.append("category", category);
    formdata.append("section", section);

    inputFields.forEach((data) => {
      formdata.append("images", data.image);
      formdata.append("text", data.text);
    });

    // console.log();
    const res = await (
      await fetch(`http://localhost:8000/api/v1/property`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
        body: formdata,
      })
    ).json();
    console.log(res);
  };

  return (
    <div className="mt-10">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {/* Add text gradient here for title? */}
        <h4 className="text-xl font-bold text-center uppercase text-slate-600 mb-4">
          Create Property
        </h4>
        <section className="grid grid-cols-2 gap-4">
          <div>
            <div className="mb-4">
              <Input
                type="text"
                name="name"
                required
                label="Property name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <Input
                type="text"
                name="address"
                required
                label="Address"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <Textarea
                name="description"
                required
                label="Description"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <Textarea
                name="summary"
                required
                label="Summary"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className="mb-4">
              <Input
                type="file"
                accept="image/*"
                name="image"
                label="Cover Image"
                required
                onChange={(event) => setImage(event.target.files[0])}
              />
            </div>
            <div className="mb-4">
              {inputFields.map((inputField, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-1 mb-2 items-center"
                >
                  <div className="overflow-hidden flex gap-1">
                    {<span className="text-sm">{index + 1}.</span>}
                    <input
                      type="file"
                      name="image"
                      id="image"
                      className="w-28"
                      onChange={(event) => handleFieldChange(event, index)}
                    />
                  </div>
                  <div className={previewImages[index] ? "col-span-2" : "col-span-3"}>
                    <Input
                      type="text"
                      name="text"
                      value={inputField[index]?.text}
                      onChange={(event) => handleFieldChange(event, index)}
                      required
                      label="Image title"
                    />
                  </div>
                  {previewImages[index] ? (
                    <img
                      src={previewImages[index]}
                      alt="preview-img"
                      className="h-10 object-center border-2"
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))}
              <Button size="sm" onClick={handleAddField}>
                Add field
              </Button>
            </div>
            <div className="mb-4">
              <Select
                name="category"
                label="Select category"
                onChange={handleCategoryChange}
              >
                {categories.map((category, idx) => (
                  <Option value={category._id} key={idx}>
                    {category.name}
                  </Option>
                ))}
              </Select>
            </div>
            <div>
              <Select
                name="section"
                label="Select section"
                onChange={(event) => setSection(event)}
              >
                {sections.map((section, idx) => (
                  <Option value={section._id} key={idx}>
                    {section.name}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
          <div className="text-end w-full">
            <Button color="blue-gray" type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default CreateProperty;
