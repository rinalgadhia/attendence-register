import {
  FETCH_TEACHERS_REQUEST,
  FETCH_TEACHERS_FAILURE,
  FETCH_TEACHERS_SUCCESS,
  FETCH_CLASS_SUCCESS,
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
  FETCH_CLASS_FAILURE,
  FETCH_CLASS_REQUEST,
  FETCH_SUBJECTS_REQUEST,
  FETCH_SUBJECTS_SUCCESS,
  FETCH_SUBJECTS_FAILURE,
} from "./types";

const teachersInitialState = {
  loading: false,
  teachers: [],
  error: "",
};

const studentsInitialState = {
  loading: false,
  students: [],
  error: "",
};

const classInitialState = {
  loading: false,
  class: [],
  error: "",
};

const subjectInitialState = {
  loading: false,
  subjects: [],
  error: [],
};

export const teachersReducer = (state = teachersInitialState, action) => {
  switch (action.type) {
    case FETCH_TEACHERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TEACHERS_SUCCESS:
      return {
        ...state,
        loading: false,
        teachers: action.payload,
        error: "",
      };

    case FETCH_TEACHERS_FAILURE:
      return {
        ...state,
        loading: false,
        teachers: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export const studentsReducer = (state = studentsInitialState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        students: action.payload,
        error: "",
      };

    case FETCH_STUDENTS_FAILURE:
      return {
        ...state,
        loading: false,
        students: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export const classReducer = (state = classInitialState, action) => {
  switch (action.type) {
    case FETCH_CLASS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        class: action.payload,
        error: "",
      };

    case FETCH_CLASS_FAILURE:
      return {
        ...state,
        loading: false,
        class: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export const subjectsReducer = (state = subjectInitialState, action) => {
  switch (action.type) {
    case FETCH_SUBJECTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SUBJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        subjects: action.payload,
        error: "",
      };

    case FETCH_SUBJECTS_FAILURE:
      return {
        ...state,
        loading: false,
        subjects: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
