import React from "react";
import { Link } from "react-router-dom";

/**
 * 
 const student = {
  id: "3434454",
  firstName: "Bob",
  lastName: "LeBlaw",
  studentEmail: "blaw@aol.com",
  studentGPA: "3.21",
  imageUrl: "",
};
 */

const StudentView = (props) => {
  return (
    <div>
      <img src={props.student.imageUrl} alt="A student"/>
      <h1>{props.student.firstName} {props.student.lastName}</h1>
      <p>Student Email: {props.student.studentEmail}</p>
      <p>Student GPA: {props.student.studentGPA}</p>
      <Link to={`/students/${props.student.id}/edit`}>Edit</Link>
      <button onClick={() => props.handleDelete(props.student.id)}>Delete</button>
    </div>
  );
};

export default StudentView;
