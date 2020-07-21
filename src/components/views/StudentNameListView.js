import React from "react";
import { Link } from "react-router-dom";

const StudentNameListView = (props) => {
  if (!props.students) {
    return <p>No students</p>;
  }

  return (
    <>
      <div>
        <ul>
          {props.students.map((student) => (
            <li key={student.id}>
              <Link to={`/students/${student.id}`}>{student.firstName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StudentNameListView;
