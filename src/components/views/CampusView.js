import React from "react";

/**
 * 
 const campus = {
  id: "3434454",
  name: "Brooklyn College",
  address: "Brooklyn",
  imageUrl: "",
  description: "A college in Brooklyn",
};
 */

const CampusView = (props) => {
  return (
    <>
      <h1>{props.campus.name}</h1>
      <h3>{props.campus.address}</h3>
      <p>{props.campus.description}</p>
      <p>{props.campus.students} Students</p>
    </>
  );
};

export default CampusView;
