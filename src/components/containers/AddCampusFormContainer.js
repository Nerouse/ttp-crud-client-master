import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AddCampusFormView } from "../views";
import { addCampusThunk } from "../../thunks";

class AddCampusFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      description: "",
      imageUrl: "",
      validForm: "",
      realtimeError: {},
    };
  }

  handleChange = (e) => {
    if (e.target.name === "name") {
      this.setState({
        name: e.target.value 
      }, this.handleValidation);
    }
    else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  handleValidation = () => {
    const { name } = this.state;
    let validForm = true;
    let realtimeError = { ...this.state.realtimeError };
    if (name.length < 1) {
      validForm = false;
      realtimeError.name = "No campus name found";
    }
    this.setState({ validForm, realtimeError });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.validForm) {
      this.props.addCampus(this.state);
    }
  };

  render() {
    return (
      <div>
        {this.state.validForm ? "" : this.state.realtimeError.name}
        <AddCampusFormView
          name={this.state.name}
          address={this.state.address}
          description={this.state.description}
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
    addCampus: (campus) => dispatch(addCampusThunk(campus, ownProps)),
  };
};

AddCampusFormContainer.propTypes = {
  addCampus: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(AddCampusFormContainer);
