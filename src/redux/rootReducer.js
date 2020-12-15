import { combineReducers } from "redux";
import {
  teachersReducer,
  studentsReducer,
  classReducer,
  subjectsReducer,
} from "./fetch/reducers";

export const rootReducer = combineReducers({
  teacher: teachersReducer,
  student: studentsReducer,
  classes: classReducer,
  subject: subjectsReducer,
});
