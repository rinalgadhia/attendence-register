import React from "react";
import "./App.css";
import Login from "./components/login";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./components/super-admin/navbar";
import Teachers from "./components/super-admin/teacher-details";
import AddTeacher from "./components/super-admin/add-teacher";
import Students from "./components/super-admin/student-details";
import AddStudent from "./components/super-admin/add-student";
import Class from "./components/super-admin/class-details";
import AddClass from "./components/super-admin/add-class";
import Subject from "./components/super-admin/subject-details";
import AddSubject from "./components/super-admin/add-subject";
import TeacherNavbar from "./components/child-admin/navbar";
import AttendenceRegister from "./components/child-admin/attendence";
import NotFound from "./components/not-found";
import store from "./redux/store";
// import { ProtectedRoute } from './components/Protected-router';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="head">
          <img
            className="logo"
            src="http://localhost:3000/images/logo.png"
            alt="logo"
          />
          <span className="h1">Attendence Portal</span>
          <img
            className="logo"
            src="http://localhost:3000/images/logo.png"
            alt="logo"
          />
        </div>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/super-admin" component={Navbar} />
              <Route exact path="/super-admin/teachers" component={Teachers} />
              <Route
                exact
                path="/super-admin/add-teacher"
                component={AddTeacher}
              />
              <Route exact path="/super-admin/students" component={Students} />
              <Route
                exact
                path="/super-admin/add-student"
                component={AddStudent}
              />
              <Route exact path="/super-admin/classes" component={Class} />
              <Route exact path="/super-admin/add-class" component={AddClass} />
              <Route exact path="/super-admin/subjects" component={Subject} />
              <Route
                exact
                path="/super-admin/add-subject"
                component={AddSubject}
              />
              <Route exact path="/child-admin" component={TeacherNavbar} />
              <Route
                exact
                path="/child-admin/attendence"
                component={AttendenceRegister}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </Provider>
      </div>
    </div>
  );
}

export default App;
