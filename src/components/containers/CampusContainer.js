import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk } from "../../thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchCampus(this.props.match.params.id);
  }

  render() {
    return <CampusView campus={this.props.campus} />;
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
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);
