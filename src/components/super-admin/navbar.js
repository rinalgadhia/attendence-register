import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

const Navbar = (props) => {
  const history = useHistory();

  const initialState = {
    show: false,
    loggedIn: true
  }

  const [show, setShow] = useState(initialState);

  const handleClick = () => {
    console.log(show);
    setShow({
      ...show,
      show: !show.show,
    });
  };

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.clear();
    setShow({
      ...show,
      loggedIn: false
    })
  }

  let token = localStorage.getItem("supertoken");
  
  if(token === null)
  {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <>
      <input type="button" className="btn btn-info float-right mr-3" value="Log Out" onClick={(e) => handleLogout(e)}/>
  
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ cursor: "pointer" }}
      >
        <span
          className="navbar-brand h1"
          onClick={() => {
            history.push("/super-admin");
          }}
        >
          Dashboard
        </span>
        <button
          className={show ? "navbar-toggler" : "navbar-toggler collapsed"}
          type="button"
          onClick={() => handleClick()}
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={
            show.show ? "navbar-collapse collapse show" : "collapse navbar-collapse"
          }
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav h3  ml-auto">
            <li
              className={
                props.teacherActive ? "nav-link active" : "nav-link nonactive"
              }
              onClick={() => {
                history.push("/super-admin/teachers");
              }}
            >
              Teachers <span className="sr-only">(current)</span>
            </li>
            <li
              className={
                props.studentActive ? "nav-link active" : "nav-link nonactive"
              }
              onClick={() => {
                history.push("/super-admin/students");
              }}
            >
              Students
            </li>
            <li
              className={
                props.classActive ? "nav-link active" : "nav-link nonactive"
              }
              onClick={() => {
                history.push("/super-admin/classes");
              }}
            >
              Class
            </li>
            <li
              className={
                props.subjectActive ? "nav-link active" : "nav-link nonactive"
              }
              onClick={() => {
                history.push("/super-admin/subjects");
              }}
            >
              Subjects
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
