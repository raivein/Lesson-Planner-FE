import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation.js";
import Logo from "./components/Logo/Logo.js";
import SignIn from "./components/SignIn/SignIn.js";
import Register from "./components/Register/Register.js";
import CardList from "./components/CardList/CardList.js";
import SearchBox from "./components/SearchBox/SearchBox.js";
import Scroll from "./components/Scroll/Scroll.js";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry.js";
import Modal from "./components/Modal/Modal.js";
import ParticlesBg from "particles-bg";

class App extends Component {
  // create the state inside the parent application
  constructor() {
    super();
    this.state = {
      route: "signin",
      isSignedIn: false,
      robots: [],
      courses: [],
      searchfield: "",
      openModal: false,
      modalKind: "",
      delete: false,
      coursesToDelete: [],
      user: {
        id: "",
        name: "",
        email: "",
        joined: "",
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        joined: data.joined,
      },
    });
  };

  //dev mode only to bypas signin
  autoSignIn = () => {
    fetch("http://localhost:6060/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "qjeabinay@tip.edu.ph",
        password: "123",
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.loadUser(user);
          this.onRouteChange("home");
        }
      });
  };
  //dev mode only to bypas signin

  resetState = () => {
    this.setState({
      openModal: false,
    });
    Object.assign(this.state.user, {
      id: "",
      name: "",
      email: "",
      joined: "",
    });
    this.setState({ robots: [] });
  };

  componentDidUpdate() {
    fetch(`http://localhost:6060/courses/${this.state.user.email}`)
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  componentDidMount() {
    fetch("http://localhost:6060/modal/courses")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({ courses: response });
        this.autoSignIn(); //dev mode only to bypas signin
      });
  }

  onRouteChange = (route) => {
    if (route === "signin") {
      this.setState({ isSignedIn: false });
      this.resetState();
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  onCoursesToDelete = (course) => {
    this.setState({ coursesToDelete: course }, () => {
      console.log("courses to delete", this.state.coursesToDelete);
    });
  };

  onOpenModal = (event, modalKind) => {
    this.setState({ openModal: event });
    this.setState({ modalKind: modalKind });
    this.setState({ searchfield: "" });
  };

  onDelete = (event) => {
    this.setState({ delete: event }, () => {
      console.log(this.state.delete);
    });
  };

  render() {
    const { robots, searchfield, courses } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.course.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className="App">
        <ParticlesBg
          className="particles"
          bg={true}
          type="cobweb"
          num={50}
          color="#1E9C17"
        />
        <ParticlesBg
          className="particles"
          bg={true}
          type="cobweb"
          num={50}
          color="#D9A714"
        />
        <Navigation
          isSignedIn={this.state.isSignedIn}
          onRouteChange={this.onRouteChange}
          resetState={this.resetState}
        />
        {this.state.openModal ? (
          <Modal
            coursesToDelete={this.state.coursesToDelete}
            courses={courses}
            userEmail={this.state.user.email}
            OpenModal={this.onOpenModal}
            modalKind={this.state.modalKind}
            onConfirmDelete={this.onConfirmDelete}
          />
        ) : this.state.route === "home" ? (
          <div>
            <Logo />
            <div>
              <SearchBox
                Delete={this.onDelete}
                SearchChange={this.onSearchChange}
                OpenModal={this.onOpenModal}
              />
              <br />
              <hr className="b--green" />
              <br />
              {!robots.length ? (
                <h1>You don't have any courses...</h1>
              ) : (
                <Scroll>
                  {/* created an ErrorBoundry for CardList component */}
                  <ErrorBoundry>
                    <CardList
                      onCoursesToDelete={this.onCoursesToDelete}
                      robots={filteredRobots}
                      deleteMode={this.state.delete}
                    />
                  </ErrorBoundry>
                </Scroll>
              )}
            </div>
          </div>
        ) : this.state.route === "signin" ? (
          <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <Register
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
          />
        )}
      </div>
    );
  }
}

export default App;
