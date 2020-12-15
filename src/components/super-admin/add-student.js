import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import Navbar from "./navbar";

const AddStudent = () => {
  const history = useHistory();

  const initialState = {
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    class: "Select Class",
    dob: ""
  };

  const [data, setData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    history.push({
      pathname: "/super-admin/students",
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
      <Navbar studentActive={true} />
      <br />
      <br />
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-8">
        <div className="form-border">
          <h2>Add student</h2>
          <br />
          
          <div className="form-row">
            {/* <div className="form-group col-md-12">
                <label className="float-left h6">Name</label>
              </div> */}
            <div className="form-group col-md-12">
              <label className="float-left h6">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter FirstName"
                name="firstName"
                onChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
              />
              
            </div>

            <div className="form-group col-md-12">
              <label className="float-left h6">Middle Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter MiddleName"
                name="middleName"
                onChange={(e) =>
                  setData({ ...data, middleName: e.target.value })
                }
              />
              
            </div>

            <div className="form-group col-md-12">
              <label className="float-left h6">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter LastName"
                name="lastName"
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
              />
              
            </div>

            <div className="form-group col-md-12">
              <label className="float-left h6">Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Address"
                name="address"
                onChange={(e) => setData({ ...data, address: e.target.value })}
              />
              
            </div>

            <label className="float-left h6">Class</label>
                <div className="dropdown float-left mb-3 col-md-12">
                  <button
                    className="btn btn-light dropdown-toggle float-left"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={() => setData({...data, show: !data.show})}
                  >
                    {data.class}
                  </button>
                  <div
                    className={
                      data.show ? "dropdown-menu show" : "dropdown-menu"
                    }
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li className="dropdown-item" onClick={() => setData({...data, class: "10", show: false})}>10</li>
                    <li className="dropdown-item" onClick={() => setData({...data, class: "11", show: false})}>11</li>
                  </div>
                </div>
                <br />
              
              <div className="form-group col-md-12">
              <label className="float-left h6">DOB</label>
              <input
                type="date"
                className="form-control"
                
                name="dob"
                onChange={(e) =>
                  setData({ ...data, dob: e.target.value })
                }
              />
              
              <br />
              <input
                type="button"
                className="btn btn-info"
                value="Add"
                name="studSubmit"
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

export default AddStudent;
