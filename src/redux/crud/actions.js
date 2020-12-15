import Axios from "axios";
import { INSERT_TEACHER_SUCCESS, INSERT_TEACHER_FAILURE, UPDATE_TEACHER_SUCCESS, UPDATE_TEACHER_FAILURE } from "./types";

export const insertTeacherSuccess = (data) => {
    return {
        type: INSERT_TEACHER_SUCCESS,
        payload: data,
    }
}

export const insertTeacherFailure = (error) => {
    return {
        type: INSERT_TEACHER_FAILURE,
        payload: error,
    }
}

export const insertTeacher = (teacher) => {
    return dispatch => {
        Axios.post("").then((response) => {
            console.log(response)
            dispatch(insertTeacherSuccess(response.data))
        }).catch((error) => {
            console.log(error)
            dispatch(insertTeacherFailure(error.message))
        })
    }
} 

export const editTeacherSuccess = (data) => {
    return {
        type: UPDATE_TEACHER_SUCCESS,
        payload: data,
    }
}

export const editTeacherFailure = (error) => {
    return {
        type: UPDATE_TEACHER_FAILURE,
        payload: error,
    }
}

export const editTeacher = (teacher) => {
    return dispatch => {
        Axios.post("").then((response) => {
            console.log(response)
            dispatch(editTeacherSuccess(response.data))
        }).catch((error) => {
            console.log(error)
            dispatch(editTeacherFailure(error.message))
        })
    }
}