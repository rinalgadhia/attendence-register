import React from "react";
import { useHistory, Redirect } from "react-router-dom";
import Navbar from "./navbar";

const Teachers = (props) => {
  console.log(props.location.state);

  const history = useHistory();

  let token = localStorage.getItem("supertoken");

  if(token === null) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <>
      <Navbar teacherActive={true} />
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col col-lg-10">
            <div className="table-responsive">
              <span className="h2">Teachers List</span>
              <button
                className="btn btn-info float-right"
                onClick={() => {
                  history.push("/super-admin/add-teacher");
                }}
              >
                Add New
              </button>
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Class</th>
                    <th>Subject</th>
                    <th>Actions</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teachers;
