import React from "react";
import { Outlet, Link } from "react-router-dom";

const Contactus = () => {
  return (
    <div>
      <h1>All contact Are here</h1>
      <Link to="/contactus/contactlist">show All</Link>
      <Outlet />
    </div>
  );
};

export default Contactus;
