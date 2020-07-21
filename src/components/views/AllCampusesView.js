import React from "react";
import "./styles/AllCampusesView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return (
      <div className="all-campuses">
        <p>There are no campuses</p>
         <Link to="/campuses/new" className="add-campus">New Campus</Link>
      </div>
    );
  }

  return (
    <div className="all-campuses">
      <Link to="/campuses/new" className="add-campus">New Campus</Link>
      <div>
        {props.allCampuses.map((campus) => (
          <div key={campus.id}>
            <Link to={`/campuses/${campus.id}`}><h1>{campus.name}</h1></Link>
            <img src={campus.imageUrl} width="100px" alt="A campus"/>
            <p>{campus.description}</p>
            <button onClick={() => props.handleDelete(campus.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
