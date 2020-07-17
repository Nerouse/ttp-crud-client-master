import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchCampusThunk, editCampusThunk } from "../../thunks";
import { connect } from "react-redux";
import { EditCampusFormView } from "../views";

class EditCampusFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      description: "",
      imageUrl: "",
    };
  }

  componentDidMount() {
    this.props.fetchCampus(this.props.match.params.id).then(({ payload }) => {
      this.setState(payload);
    });
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.editCampus(id, this.state);
    this.props.history.push(`/campuses/${id}`);
  };

  render() {
    return (
      <EditCampusFormView
        name={this.state.name}
        address={this.state.address}
        description={this.state.description}
        imageUrl={this.state.imageUrl}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapState = (state) => {
  return { campus: state.campus };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (id, campus) => dispatch(editCampusThunk(id, campus)),
  };
};

EditCampusFormContainer.propTypes = {
  fetchCampus: PropTypes.func.isRequired,
  editCampus: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(EditCampusFormContainer);
