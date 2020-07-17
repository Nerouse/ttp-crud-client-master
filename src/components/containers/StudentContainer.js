import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentsThunk } from "../../thunks";

import { StudentView } from "../views";

class StudentsContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);
  }

  render() {
    return <StudentView student={this.props.student} />;
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
