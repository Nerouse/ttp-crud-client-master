import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AddStudentFormView } from "../views";
import { addStudentThunk } from "../../thunks";

class AddStudentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      imageUrl: "",
      studentEmail: "",
      studentGPA: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addStudent(this.state);
  };
  render() {
    return (
      <AddStudentFormView
        firstName={this.state.name}
        lastName={this.state.name}
        imageUrl={this.state.imageUrl}
        studentEmail={this.state.name}
        studentGPA={this.state.name}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addStudent: (student) => dispatch(addStudentThunk(student)),
  };
};

AddStudentFormContainer.propTypes = {
  addStudent: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(AddStudentFormContainer);
