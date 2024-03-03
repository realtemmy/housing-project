import React from "react";
import { Spinner } from "@material-tailwind/react";
import "./Loader.scss";

const Loader = ({ message = "It's network dear, chill" }) => {
  return (
    <div className="loader-container">
      <div className="content">
        <div>
          <Spinner color="red" className="h-16 w-16 text-red-300" />
          <div className="text w-96">
            {" "}
            <i>{message}</i>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
