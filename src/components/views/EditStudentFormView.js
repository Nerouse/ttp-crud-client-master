import React from "react";
import PropTypes from "prop-types";

const EditStudentFormView = (props) => {
  return (
    <div className="container">
      <form onSubmit={props.handleSubmit} className="pt-4">
        <div className="form-group">
          <label>First Name</label>
          <input
            className="form-control"
            value={props.firstName}
            name="firstName"
            onChange={props.handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            className="form-control"
            value={props.lastName}
            name="lastName"
            onChange={props.handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Student Email</label>
          <input
            className="form-control"
            value={props.studentEmail}
            name="studentEmail"
            onChange={props.handleChange}
          ></input>
        </div>
        <div className="form-group mb-4">
          <label>Image Url</label>
          <input
            className="form-control"
            value={props.imageUrl}
            name="imageUrl"
            onChange={props.handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Student GPA</label>
          <input
            className="form-control"
            value={props.studentGPA}
            name="studentGPA"
            onChange={props.handleChange}
          ></input>
        </div>
        <button className="btn btn-primary">Edit Student</button>
      </form>
    </div>
  );
};

EditStudentFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  studentEmail: PropTypes.string.isRequired,
  studentGPA: PropTypes.string.isRequired,
};

export default EditStudentFormView;
