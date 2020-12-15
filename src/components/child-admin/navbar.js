import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

const TeacherNavbar = (props) => {
  const history = useHistory();

  const initialState = {
    show: false,
    loggedIn: true,
  };

  const [show, setShow] = useState(initialState);

  const handleClick = () => {
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
      loggedIn: false,
    });
  };

  let token = localStorage.getItem("childtoken");

  if (token === null) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <input
        type="button"
        className="btn btn-info float-right mr-3"
        value="Log Out"
        onClick={(e) => handleLogout(e)}
      />

      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ cursor: "pointer" }}
      >
        <span
          className="navbar-brand h1"
          onClick={() => {
            history.push("/child-admin");
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
            show.show
              ? "navbar-collapse collapse show"
              : "collapse navbar-collapse"
          }
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav h2  ml-auto">
            <li
              className={
                props.attendenceActive
                  ? "nav-link active"
                  : "nav-link nonactive"
              }
              onClick={() => {
                history.push("/child-admin/attendence");
              }}
            >
              Attendence <span className="sr-only">(current)</span>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TeacherNavbar;
