import React from "react";
import PropTypes from "prop-types";

const AddCampusFormView = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          Name:{" "}
          <input
            value={props.name}
            name="name"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          Address:{" "}
          <input
            value={props.address}
            name="address"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          Description:{" "}
          <input
            value={props.description}
            name="description"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          Image Url:{" "}
          <input
            value={props.imageUrl}
            name="imageUrl"
            onChange={props.handleChange}
          ></input>
        </div>
        <button>Create Campus</button>
      </form>
    </div>
  );
};

AddCampusFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default AddCampusFormView;
