import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk } from "../../thunks";
import { AllCampusesView } from "../views";

// Smart container;
class AllCampusesContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllCampuses();
  }

  render() {
    return (
      <AllCampusesView
        allCampuses={this.props.allCampuses}
        hello={this.props.hello}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    hello: "hello world!!!",
    allCampuses: state.allCampuses,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  };
};

// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllCampusesContainer);
