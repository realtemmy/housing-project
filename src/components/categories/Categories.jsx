import React from "react";
import CategoryItem from "../category-item/CategoryItem";

const Categories = () => {
    // "https://via.placeholder.com/600x400",
    // "https://via.placeholder.com/600x400/FF5733/FFFFFF",
    // "https://via.placeholder.com/600x400/33FF57/FFFFFF",
    // "https://via.placeholder.com/600x400/5733FF/FFFFFF",
  const types = [
    {
      name: "houses",
      properties: [
        {
          id: 1,
          owner: "realtemmy",
          photo: "",
          location: "banana island, lekki, Lagos state",
          dateListed: "26-05-2024",
          image: "https://via.placeholder.com/600x400/FF5733/FFFFFF",
          images: [
            "https://via.placeholder.com/600x400/33FF57/FFFFFF",
            "https://via.placeholder.com/600x400/FF5733/FFFFFF",
            "https://via.placeholder.com/600x400/5733FF/FFFFFF",
          ],
        },
        {
          id: 2,
          owner: "david",
          photo: "",
          location: "banana island, lekki, Lagos state",
          dateListed: "26-05-2024",
          image: "https://via.placeholder.com/600x400",
          images: [
            "https://via.placeholder.com/600x400/33FF57/FFFFFF",
            "https://via.placeholder.com/600x400/5733FF/FFFFFF",
            "https://via.placeholder.com/600x400/FF5733/FFFFFF",
          ],
        },
        {
          id: 3,
          owner: "dumbor",
          photo: "",
          location: "banana island, lekki, Lagos state",
          dateListed: "26-05-2024",
          image: "https://via.placeholder.com/600x400/5733FF/FFFFFF",
          images: [
            "https://via.placeholder.com/600x400",
            "https://via.placeholder.com/600x400/FF5733/FFFFFF",
            "https://via.placeholder.com/600x400/5733FF/FFFFFF",
          ],
        },
      ],
    },
    {
      name: "hostel",
      properties: [
        {
          owner: "ife",
          photo: "",
          location: "banana island, lekki, Lagos state",
          dateListed: "26-05-2024",
          image: "https://via.placeholder.com/600x400/5733FF/FFFFFF",
          images: [
            "https://via.placeholder.com/600x400/FF5733/FFFFFF",
            "https://via.placeholder.com/600x400",
            "https://via.placeholder.com/600x400/33FF57/FFFFFF",
          ],
        },
        {
          owner: "deola",
          photo: "",
          location: "banana island, lekki, Lagos state",
          dateListed: "26-05-2024",
          image: "https://via.placeholder.com/600x400",
          images: [
            "https://via.placeholder.com/600x400/FF5733/FFFFFF",
            "https://via.placeholder.com/600x400/5733FF/FFFFFF",
            "https://via.placeholder.com/600x400",
          ],
        },
        {
          owner: "emesike",
          photo: "",
          location: "banana island, lekki, Lagos state",
          dateListed: "26-05-2024",
          image: "https://via.placeholder.com/600x400",
          images: [
            "https://via.placeholder.com/600x400/5733FF/FFFFFF",
            "https://via.placeholder.com/600x400",
            "https://via.placeholder.com/600x400/33FF57/FFFFFF",
          ],
        },
      ],
    },
    {
      name: "apartment",
      properties: [
        {
          owner: "veli",
          photo: "",
          location: "banana island, lekki, Lagos state",
          dateListed: "26-05-2024",
          image: "https://via.placeholder.com/600x400/33FF57/FFFFFF",
          images: [
            "https://via.placeholder.com/600x400",
            "https://via.placeholder.com/600x400/5733FF/FFFFFF",
            "https://via.placeholder.com/600x400/FF5733/FFFFFF",
          ],
        },
        {
          owner: "papman",
          photo: "",
          location: "banana island, lekki, Lagos state",
          dateListed: "26-05-2024",
          image: "https://via.placeholder.com/600x400/FF5733/FFFFFF",
          images: [
            "https://via.placeholder.com/600x400/5733FF/FFFFFF",
            "https://via.placeholder.com/600x400/FF5733/FFFFFF",
            "https://via.placeholder.com/600x400/33FF57/FFFFFF",
          ],
        },
        {
          owner: "beejay",
          photo: "",
          location: "banana island, lekki, Lagos state",
          dateListed: "26-05-2024",
          image: "https://via.placeholder.com/600x400/FF5733/FFFFFF",
          images: [
            "https://via.placeholder.com/600x400/33FF57/FFFFFF",
            "https://via.placeholder.com/600x400/5733FF/FFFFFF",
            "https://via.placeholder.com/600x400",
          ],
        },
      ],
    },
  ];
  return (
    <div>
      <h4 className="font-semibold text-lg my-4">Categories</h4>
      {types.map((type, idx) => (
        <div key={idx}>
          <article>
            <h4 className="font-semibold text-xl capitalize my-4">
              {type.name}
            </h4>
            <CategoryItem properties={type.properties} location={type.name} />
          </article>
        </div>
      ))}
    </div>
  );
};

export default Categories;
