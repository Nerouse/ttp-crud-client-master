import React from "react";
import "./styles/AllCampusesView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = ({ allStudents, handleDelete }) => {
  if (!allStudents.length) {
    return (
      <div className="all-campuses">
        <p>There are no campuses</p>
          <Link to="/students/new" className="add-campus"> New Student </Link>
      </div>
    );
  }

  return (
    <div className="all-campuses">
      <Link to="/students/new" className="add-campus">New Student</Link>
      <div>
        {allStudents.map((student) => (
          <div key={student.id}>
            <img src={student.imageUrl} width="100px" alt= "A student"/>
            <p> {student.firstName} {student.lastName} </p>
            <Link to={`/students/${student.id}`}>View Student</Link>
            <button onClick={() => handleDelete(student.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;
