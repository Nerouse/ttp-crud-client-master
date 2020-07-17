import axios from "axios";

// ACTION TYPES
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const ENROLL_STUDENT = "ENROLL_STUDENT";
const ADD_STUDENT = "ADD_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";

// ACTION CREATORS
const fetchAllStudents = (students) => {
  return {
    type: FETCH_ALL_STUDENTS,
    payload: students,
  };
};

const enrollStudent = (student) => {
  return {
    type: ENROLL_STUDENT,
    payload: student,
  };
};

const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    payload: student,
  };
};

const deleteStudent = (id) => {
  return {
    type: DELETE_STUDENT,
    payload: id,
  };
};

//THUNK CREATORS

export const fetchAllStudentsThunk = () => (dispatch) => {
  return axios
    .get("/api/students")
    .then((res) => res.data)
    .then((students) => dispatch(fetchAllStudents(students)))
    .catch((err) => console.log(err));
};

export const enrollStudentThunk = (campusId, studentId) => (dispatch) => {
  return axios
    .put(`/api/students/${studentId}`, { campusId: campusId })
    .then((res) => res.data)
    .then((student) => dispatch(enrollStudent(student)))
    .catch((err) => console.log(err));
};

export const addStudentThunk = (student, ownProps) => (dispatch) => {
  return axios
    .post("/api/students", student)
    .then((res) => res.data)
    .then((newStudent) => {
      const tweakedStudent = { ...newStudent };
      dispatch(addStudent(tweakedStudent));
      ownProps.history.push(`/students/${newStudent.id}`);
    })
    .catch((err) => console.log(err));
};

export const deleteStudentThunk = (id) => (dispatch) => {
  return axios
    .delete(`/api/students/${id}`)
    .then((res) => res.data)
    .then(() => dispatch(deleteStudent(id)))
    .catch((err) => console.log(err));
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_STUDENTS:
      return action.payload;
    case ENROLL_STUDENT:
      return state.map((student) => student.id === action.payload.id ? action.payload : student);
    case DELETE_STUDENT:
      return state.filter((student) => student.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;