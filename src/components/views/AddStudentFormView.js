import React from "react";

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
            required
          ></input>
        </div>
        <div>
          Last Name:{" "}
          <input
            value={props.lastName}
            name="lastName"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
         Student Email:{" "}
          <input
            value={props.studentEmail}
            name="studentEmail"
            onChange={props.handleChange}
            required
            type="email"
          ></input>
        </div>
        <div>
          Student GPA:{" "}
          <input
            value={props.studentGPA}
            name="studentGPA"
            onChange={props.handleChange}
            required
            type="number"
            step="0.01"
            min="0"
            max="4"
          ></input>
        </div>
        <div>
          Image Url:{" "}
          <input
            value={props.imageUrl}
            name="imageUrl"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <button>Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentFormView;
