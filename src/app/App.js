import React, { Component } from "react";
import "./App.css";
import {NavBarContainer} from	"../components/containers";
import RoutesContainer from "../components/routes/RoutesContainer";

class App extends Component {
  render() {
    return (
      <div className="app">
      <NavBarContainer />
        <header className="app-header">
          <RoutesContainer />
        </header>
      </div>
    );
  }
}

export default App;
