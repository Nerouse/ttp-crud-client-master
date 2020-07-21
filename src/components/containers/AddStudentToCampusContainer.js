import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudentsThunk } from "../../thunks";

class AddStudentToCampusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      student_value: "" 
    };
  }
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleEnrollStudent(this.props.campus_value, this.state.student_value);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Add Student to Campus</h1>
      </div>
    );
  }
}

const mapState = (state) => {
  return { allStudents: state.allStudents };
};

const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
  };
};

export default connect(mapState, mapDispatch)(AddStudentToCampusContainer);
