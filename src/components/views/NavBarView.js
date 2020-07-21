import React from "react";
import {Link} from "react-router-dom";

const NavBarView = (props) =>{
	return (
	<nav className = "nav">
	    <Link className = "button" to="/"> Home </Link>

        <Link className = "button" to="/campuses" >
          Campuses
        </Link>
        <Link className = "button" to="/students">
          Students
        </Link>

	</nav>
	);
};
export default NavBarView;
