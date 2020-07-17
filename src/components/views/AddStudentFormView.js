import React from "react";
import PropTypes from "prop-types";

const AddStudentFormView = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          First Name:{" "}
          <input
            value={props.firstName}
            name="firstName"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          Last Name:{" "}
          <input
            value={props.lastName}
            name="lastName"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          Image Url:{" "}
          <input
            value={props.imageUrl}
            name="imageUrl"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          Student Email:{" "}
          <input
            value={props.studentEmail}
            name="studentEmail"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          Student GPA:{" "}
          <input
            value={props.studentGPA}
            name="studentGPA"
            onChange={props.handleChange}
          ></input>
        </div>
        <button>Create Student</button>
      </form>
    </div>
  );
};

AddCampusFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  studentEmail: PropTypes.string.isRequired,
  studentGPA: PropTypes.string.isRequired,
};

export default AddStudentFormView;
