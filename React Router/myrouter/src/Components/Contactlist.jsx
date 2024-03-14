import React from "react";
import { Link } from "react-router-dom";

const Contactlist = () => {
  return (
    <div>
      <ul>
        <li>
          product:1 <Link to="contact/1">open</Link>{" "}
        </li>
        <li>
          product:2 <Link to="contact/2">open</Link>{" "}
        </li>
        <li>
          product:3 <Link to="contact/3">open</Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Contactlist;
