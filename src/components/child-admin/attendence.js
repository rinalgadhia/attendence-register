import React, {  } from "react";
import { Redirect } from "react-router-dom";
import TeacherNavbar from "./navbar";

const AttendenceRegister = () => {
  // const [show, setShow] = useState(false);

  // const handleClick = () => {
  //   setShow({
  //     show: !show,
  //   });
  // };

  let token = localStorage.getItem("childtoken");

  if(token === null) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <>
      <TeacherNavbar attendenceActive={true} />
      <h3>Attendence Register</h3>
    </>
  );
};

export default AttendenceRegister;
