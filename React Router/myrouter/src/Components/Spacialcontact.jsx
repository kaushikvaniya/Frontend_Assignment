import React from "react";
import { useParams } from "react-router-dom";

const Spacialcontact = () => {
  let { contactid } = useParams();

  return <h1>This id is : {contactid}</h1>;
};

export default Spacialcontact;
