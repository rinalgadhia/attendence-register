import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import Navbar from "./navbar";

const AddTeacher = () => {
  const history = useHistory();

  const initialState = {
    firstName: "",
    middleName: "",
    lastName: "",
    class: "Select Class",
    subject: "Select Subject",
    userName: "",
    password: "",
    show1: false,
    show2: false,
  };

  const [data, setData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push({
      pathname: "/super-admin/teachers",
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
      <Navbar teacherActive={true} />
      <br />

      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-7">
            <div className="form-border">
              <h2>Add teacher</h2>
              <br />

              <div className="form-row">
                <div
                  className="form-group col-md-12"
                  style={{ margin: "0", padding: "0" }}
                >
                  <label className="float-left h6">Name</label>
                </div>
                <div className="form-group col-md-4">
                  {/* <label className="float-left h6">First Name</label> */}
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

                <div className="form-group col-md-4">
                  {/* <label className="float-left h6">Middle Name</label> */}
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

                <div className="form-group col-md-4">
                  {/* <label className="float-left h6">Last Name</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter LastName"
                    name="lastName"
                    onChange={(e) =>
                      setData({ ...data, lastName: e.target.value })
                    }
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
                    onClick={() => setData({...data, show1: !data.show1})}
                  >
                    {data.class}
                  </button>
                  <div
                    className={
                      data.show1 ? "dropdown-menu show" : "dropdown-menu"
                    }
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li className="dropdown-item" onClick={() => setData({...data, class: "10", show1: false})}>10</li>
                    <li className="dropdown-item" onClick={() => setData({...data, class: "11", show1: false})}>11</li>
                  </div>
                </div>
                <br />
                
                <label className="float-left h6">Subject</label>
                <div className="dropdown float-left mb-3 col-md-12">
                  
                  <button
                    className="btn btn-light dropdown-toggle float-left"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={() => setData({...data, show2: !data.show2})}
                  >
                    {data.subject}
                  </button>
                  <div
                    className={
                      data.show2 ? "dropdown-menu show" : "dropdown-menu"
                    }
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li className="dropdown-item" onClick={() => setData({...data, subject: "English", show2: false})}>English</li>
                    <li className="dropdown-item" onClick={() => setData({...data, subject: "Maths", show2: false})}>Maths</li>
                  </div>
                </div>
                <br />

                <div className="form-group col-md-12 ">
                  <label className="float-left h6">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter UserName"
                    name="userName"
                    onChange={(e) =>
                      setData({ ...data, userName: e.target.value })
                    }
                  />
                </div>

                <div className="form-group col-md-12">
                  <label className="float-left h6">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    name="password"
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                  />
                  <br />

                  <input
                    type="button"
                    className="btn btn-info"
                    value="Add"
                    name="addTeacher"
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

export default AddTeacher;
