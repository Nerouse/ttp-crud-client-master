import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, deleteCampusThunk, enrollStudentThunk } from "../../thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchCampus(this.props.match.params.id);
  }

  handleDelete = (id) => {
    this.props.deleteCampus(id);
    this.props.history.push("/campuses");
  };

  handleEnrollStudent = (campus_value, student_value) => {
    this.props.enrollStudent(campus_value, student_value);
  };

  render() {
    return <CampusView campus={this.props.campus} handleDelete={this.handleDelete} handleEnrollStudent={this.handleEnrollStudent}/>;
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
    enrollStudent: (campus_value, student_value) => dispatch(enrollStudentThunk(campus_value, student_value)),
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);
