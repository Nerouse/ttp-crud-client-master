import React from "react";
import PropTypes from "prop-types";

const EditCampusFormView = (props) => {
  return (
    <div className="container">
      <form onSubmit={props.handleSubmit} className="pt-4">
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            value={props.name}
            name="name"
            onChange={props.handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            className="form-control"
            value={props.address}
            name="address"
            onChange={props.handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            className="form-control"
            value={props.description}
            name="description"
            onChange={props.handleChange}
          ></input>
        </div>
        <div className="form-group mb-4">
          <label>Image Url</label>
          <input
            className="form-control"
            value={props.imageUrl}
            name="imageUrl"
            onChange={props.handleChange}
          ></input>
        </div>
        <button className="btn btn-primary">Edit Campus</button>
      </form>
    </div>
  );
};

EditCampusFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default EditCampusFormView;
