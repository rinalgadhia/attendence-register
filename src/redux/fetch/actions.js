import {
  FETCH_TEACHERS_REQUEST,
  FETCH_TEACHERS_FAILURE,
  FETCH_TEACHERS_SUCCESS,
  FETCH_CLASS_SUCCESS,
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
  FETCH_CLASS_REQUEST,
  FETCH_CLASS_FAILURE,
  FETCH_SUBJECTS_REQUEST,
  FETCH_SUBJECTS_SUCCESS,
  FETCH_SUBJECTS_FAILURE,
} from "./types";
import axios from "axios";

export const fetchTeachersRequest = () => {
  return {
    type: FETCH_TEACHERS_REQUEST,
  };
};

export const fetchTeachersSuccess = (teachers) => {
  return {
    type: FETCH_TEACHERS_SUCCESS,
    payload: teachers,
  };
};

export const fetchTeachersFailure = (error) => {
  return {
    type: FETCH_TEACHERS_FAILURE,
    payload: error,
  };
};

export const fetchTeachers = () => {
  return (dispatch) => {
    dispatch(fetchTeachersRequest);
    axios
      .get("")
      .then((response) => {
        console.log(response);
        const teachers = response.data;
        dispatch(fetchTeachersSuccess(teachers));
      })
      .catch((error) => {
        console.log(error);
        const errorMsg = error.message;
        dispatch(fetchTeachersFailure(errorMsg));
      });
  };
};

export const fetchStudentsRequest = () => {
  return {
    type: FETCH_STUDENTS_REQUEST,
  };
};

export const fetchStudentsSuccess = (students) => {
  return {
    type: FETCH_STUDENTS_SUCCESS,
    payload: students,
  };
};

export const fetchStudentsFailure = (error) => {
  return {
    type: FETCH_STUDENTS_FAILURE,
    payload: error,
  };
};

export const fetchStudents = () => {
  return (dispatch) => {
    dispatch(fetchStudentsRequest);
    axios
      .get("")
      .then((response) => {
        console.log(response);
        const students = response.data;
        dispatch(fetchStudentsSuccess(students));
      })
      .catch((error) => {
        console.log(error);
        const errorMsg = error.message;
        dispatch(fetchStudentsFailure(errorMsg));
      });
  };
};

export const fetchClassRequest = () => {
  return {
    type: FETCH_CLASS_REQUEST,
  };
};

export const fetchClassSuccess = (classes) => {
  return {
    type: FETCH_CLASS_SUCCESS,
    payload: classes,
  };
};

export const fetchClassFailure = (error) => {
  return {
    type: FETCH_CLASS_FAILURE,
    payload: error,
  };
};

export const fetchClass = () => {
  return (dispatch) => {
    dispatch(fetchTeachersRequest);
    axios
      .get("")
      .then((response) => {
        console.log(response);
        const classes = response.data;
        dispatch(fetchTeachersSuccess(classes));
      })
      .catch((error) => {
        console.log(error);
        const errorMsg = error.message;
        dispatch(fetchTeachersFailure(errorMsg));
      });
  };
};

export const fetchSubjectsRequest = () => {
  return {
    type: FETCH_SUBJECTS_REQUEST,
  };
};

export const fetchSubjectssSuccess = (subjects) => {
  return {
    type: FETCH_SUBJECTS_SUCCESS,
    payload: subjects,
  };
};

export const fetchSubjectsFailure = (error) => {
  return {
    type: FETCH_SUBJECTS_FAILURE,
    payload: error,
  };
};

export const fetchSubjects = () => {
  return (dispatch) => {
    dispatch(fetchTeachersRequest);
    axios
      .get("")
      .then((response) => {
        console.log(response);
        const subjects = response.data;
        dispatch(fetchTeachersSuccess(subjects));
      })
      .catch((error) => {
        console.log(error);
        const errorMsg = error.message;
        dispatch(fetchTeachersFailure(errorMsg));
      });
  };
};
