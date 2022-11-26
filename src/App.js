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
			searchfield: "",
			openModal: false,
			modalKind: "",
			user: {
				id: "",
				name: "",
				email: "",
				joined: "",
			}
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

	resetState = () => {
		this.setState({
			openModal: false,
		});
	};

	componentDidMount() {
		fetch("http://localhost:5050/")
			.then((response) => {
				return response.json();
			})
			.then((users) => {
				this.setState({ robots: users });
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

	onOpenModal = (event, modalKind) => {
		this.setState({ openModal: event });
		this.setState({ modalKind: modalKind });
	};

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
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
						OpenModal={this.onOpenModal}
						modalKind={this.state.modalKind}
					/>
				) : this.state.route === "home" ? (
					<div>
						<Logo />
						<div>
							<SearchBox
								SearchChange={this.onSearchChange}
								OpenModal={this.onOpenModal}
							/>
							<br />
							<hr className="b--green" />
							<br />
							{!robots.length ? (
								<h1>Loading...</h1>
							) : (
								<Scroll>
									{/* created an ErrorBoundry for CardList component */}
									<ErrorBoundry>
										<CardList robots={filteredRobots} />
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
