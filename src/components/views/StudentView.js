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

const StudentView = (props) => {
  return (
    <>
      <h1>{props.student.firstName} {props.student.lastName}</h1>
      <h3>{props.student.studentEmail}</h3>
      <p>{props.student.studentGPA}</p>
    </>
  );
};

export default StudentView;
