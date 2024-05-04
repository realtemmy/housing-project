import { useParams } from "react-router-dom";

const HomeType = () => {
  // view location (on google map)

  const { category } = useParams();
  return (
    <div>
      <h2 className="text-center text-xl font-semibold capitalize">
        {category}
      </h2>
      <p>displays data on category</p>

      <div></div>
    </div>
  );
};

export default HomeType;
