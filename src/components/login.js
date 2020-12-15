import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const initialState = {
    username: "",
    password: "",
    show: false,
    roll: "Select Roll",
    loggedIn: false,
  };
  const [data, setData] = useState(initialState);

  const handleClick = () => {
    setData({
      ...data,
      show: !data.show,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.username === "Rinal" && data.password === "rinii1819") {
      setData({
        ...data,
        loogedIn: true,
      })
      if (data.roll === "Super Admin") {
        localStorage.setItem("supertoken", "fdseg534frsg4")
        history.push("/super-admin");
      } else {
        alert("Select appropriate Roll");
      }
    } else if(data.username === "Child Admin" && data.password === "child1801") {
        setData({
          ...data,
          loogedIn: true,
        })
        if (data.roll === "Child Admin") {
          localStorage.setItem("childtoken", "ghiyad789vcbf")
          history.push("/child-admin");
        } else {
          alert("Select appropriate Roll");
        }
    } else {
      alert("Wrong username or password")
    }
  };

  let Supertoken = localStorage.getItem("supertoken");
  let Childtoken = localStorage.getItem("childtoken");

  if(Supertoken !== null)
  {
    return <Redirect to="/super-admin" />
  }
  else if(Childtoken !== null) {
    return (
      <Redirect to="/child-admin" />
    )
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <div className="form-border">
              <h2 className="login-head">Login</h2>
              <br />
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label className="float-left h5">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="usename"
                    placeholder="Enter UserName"
                    onChange={(e) =>
                      setData({ ...data, username: e.target.value })
                    }
                    required
                  />
                  <br />
                  
                  <label className="float-left h5">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter Password"
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                    required
                  />
                  <br />
                  
                  <div className="dropdown float-left">
                    <button
                      className="btn btn-info dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onClick={() => handleClick()}
                    >
                      {data.roll}
                    </button>
                    <div
                      className={
                        data.show ? "dropdown-menu show" : "dropdown-menu"
                      }
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li
                        className="dropdown-item"
                        onClick={() =>
                          setData({ ...data, roll: "Super Admin", show: false })
                        }
                      >
                        Super Admin
                      </li>
                      <li
                        className="dropdown-item"
                        onClick={() =>
                          setData({ ...data, roll: "Child Admin", show: false })
                        }
                      >
                        Child Admin
                      </li>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />

                  <input
                    type="button"
                    className="btn btn-info"
                    value="Log In"
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

export default Login;
