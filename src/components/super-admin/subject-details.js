import React from "react";
import { useHistory, Redirect } from "react-router-dom";
import Navbar from "./navbar";

const Subject = () => {
  const history = useHistory();

  let token = localStorage.getItem("supertoken");

  if(token === null) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <>
      <Navbar subjectActive={true} />
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <div className="table-responsive">
              <span className="h1">Subjects List</span>
              <button
                className="btn btn-info float-right"
                onClick={() => {
                  history.push("/super-admin/add-subject");
                }}
              >
                Add New
              </button>

              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
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

export default Subject;
