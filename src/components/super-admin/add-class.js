import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Navbar from "./navbar";

const AddClass = () => {
  const history = useHistory();

  const initialState = {
    classname: "",
  };

  const [data, setData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data.classname);
    history.push({
      pathname: "/super-admin/classes",
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
      <Navbar classActive={true} />
      <br />
      
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <div className="form-border">
              <h2>Add Class</h2>
              <br />
              
              <div className="form-row">
                {/* <div className="form-group col-md-12">
                <label className="float-left h5">Name</label>
              </div> */}
                <div className="form-group col-md-12">
                  <label className="float-left h6">Class Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter ClassName"
                    name="classname"
                    onChange={(e) => setData({ classname: e.target.value })}
                  />
                  <br />

                  <input
                    type="button"
                    className="btn btn-info"
                    value="Add"
                    name="classSubmit"
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

export default AddClass;
