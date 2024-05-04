import React, { useEffect, useState } from "react";

const Notification = ({ message }) => {
  // receives message, status
  //   change shows state to true immediately message, status etc changes
  useEffect(() => {
    setShow(true);
  }, [message]);
  const [show, setShow] = useState(true);
  return (
    <>
      {message.length > 0 && show && (
        <div className="flex items-center justify-between bg-blue-gray-200 px-3 py-2">
          <p className="text-white">{message}</p>
          <span
            className="text-sm cursor-pointer text-red-800"
            onClick={() => setShow(false)}
          >
            <i className="fa-solid fa-x"></i>
          </span>
        </div>
      )}
    </>
  );
};

export default Notification;
