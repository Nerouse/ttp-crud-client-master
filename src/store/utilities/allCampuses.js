import axios from "axios";

// const BASE_URL =
//   "https://cors-anywhere.herokuapp.com/" + "http://localhost:3001";

// ACTION TYPES;
const FETCH_ALL_CAMPUSES = "FETCH_ALL_CAMPUSES";
const ADD_CAMPUS = "ADD_CAMPUS";

// ACTION CREATORS;
const fetchAllCampuses = (campuses) => {
  return {
    type: FETCH_ALL_CAMPUSES,
    payload: campuses,
  };
};

const addCampus = (campus) => {
  return {
    type: ADD_CAMPUS,
    payload: campus,
  };
};

// THUNK CREATORS;
export const fetchAllCampusesThunk = () => (dispatch) => {
  return axios
    .get("/api/campuses")
    .then((res) => res.data)
    .then((campuses) => dispatch(fetchAllCampuses(campuses)))
    .catch((err) => console.log(err));
};

export const addCampusThunk = (campus) => (dispatch) => {
  return axios
    .post("/api/campuses", campus)
    .then((res) => res.data)
    .then((newCampus) => dispatch(addCampus(newCampus)))
    .catch((err) => console.log(err));
};

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CAMPUSES:
      return action.payload;
    case ADD_CAMPUS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
