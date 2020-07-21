import React, { Component } from "react";
import PropTypes from "prop-types";
import { StudentNameListView } from "../views";

class StudentNameListContainer extends Component {
  render() {
    return <StudentNameListView students={this.props.students} />;
  }
}

StudentNameListContainer.propTypes = { students: PropTypes.array };

export default StudentNameListContainer;
