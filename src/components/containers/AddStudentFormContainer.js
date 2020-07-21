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
      studentEmail: "",
      studentGPA: "",
      imageUrl: "",
      validForm: "",
      realtimeError: {},
    };
  }

  handleChange = (e) => {
    if (e.target.name === "firstName") {
      this.setState({
        firstName: e.target.value 
      }, this.handleValidation);
    }
    else if (e.target.name === "lastName") {
      this.setState({
        lastName: e.target.value 
      }, this.handleValidation);
    }
    else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  handleValidation = () => {
    const { firstName } = this.state;
    const { lastName } = this.state;
    let validForm = true;
    let realtimeError = { ...this.state.realtimeError };
    if (firstName.length < 1 || lastName.length < 1) {
      validForm = false;
      realtimeError.name = "No name found";
    }
    this.setState({ validForm, realtimeError });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.validForm) {
      this.props.addStudent(this.state);
    }
  };

  render() {
    return (
      <div>
        {this.state.validForm ? "" : this.state.realtimeError.name}
        <AddStudentFormView
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          studentEmail={this.state.studentEmail}
          studentGPA={this.state.studentGPA}
          imageUrl={this.state.imageUrl}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    addStudent: (student) => dispatch(addStudentThunk(student, ownProps)),
  };
};

AddStudentFormContainer.propTypes = {
  addStudent: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(AddStudentFormContainer);
