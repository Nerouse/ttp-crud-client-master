import React from "react";
import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <center>
      <h1>Campus Crud App</h1>
      <div>
          <Link className="button" to="/campuses">View Campuses</Link>
          <Link className="button" to="/students">View Students</Link>
      </div>
    </center>
  );
};

export default HomeView;
