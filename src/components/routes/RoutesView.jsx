import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomeView } from "../views";
import {
  AllCampusesContainer,
  CampusContainer,
  AddCampusFormContainer,
  AllStudentsContainer,
  StudentContainer,
  AddStudentFormContainer,
  EditCampusFormContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/campuses" component={AllCampusesContainer} />
      <Route exact path="/campuses/new" component={AddCampusFormContainer} />
      <Route exact path="/campuses/:id" component={CampusContainer} />
      <Route exact path="/students" component={AllStudentsContainer} />
      <Route exact path="/students/new" component={AddStudentFormContainer} />
      <Route exact path="/students/:id" component={StudentContainer} />
      <Route exact path="/campuses/:id/edit" component={EditCampusFormContainer} />
    </Switch>
  );
};

export default RoutesView;
