import React from "react";
import { Outlet } from "react-router-dom";

const Admin = () => {
 

  return (
    <>
      <div>This is the admins route</div>
      <Outlet />
    </>
  );
};

export default Admin;
