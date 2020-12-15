import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import Navbar from "./navbar";

const AddSubject = () => {
  const history = useHistory();

  const initialState = {
    subject: "",
  };

  const [data, setData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    history.push({
      pathname: "/super-admin/subjects",
      state: data,
    });
  };

  let token = localStorage.getItem("supertoken");

  if(token === null) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <>
      <Navbar subjectActive={true} />
      <br />
      
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
        <div className="form-border">
          <h2>Add Subject</h2>
          <br />
          
          <div className="form-row">
            {/* <div className="form-group col-md-12">
                <label className="float-left h5">Name</label>
              </div> */}
            <div className="form-group col-md-12">
              <label className="float-left h6">Subject Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter SubjectName"
                name="subject"
                onChange={(e) => setData({ ...data, subject: e.target.value })}
              />
              <br />

              <input
                type="button"
                className="btn btn-info"
                value="Add"
                onClick={(e) => handleSubmit(e)}
              />
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default AddSubject;
