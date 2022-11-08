import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation.js";
import Logo from "./components/Logo/Logo.js";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./components/Rank/Rank.js";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition.js";
import SignIn from "./components/SignIn/SignIn.js";
import Register from "./components/Register/Register.js";
import CardList from "./components/CardList/CardList.js";
import SearchBox from "./components/SearchBox/SearchBox.js";
import Scroll from "./components/Scroll/Scroll.js";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry.js";
import Clarifai from "clarifai";
import { useState } from "react";
import Modal from "./components/Modal/Modal.js";

const app = new Clarifai.App({
	apiKey: "e94b1660d9324eed85b54a57006a82ef",
});

class App extends Component {
	// create the state inside the parent application
	constructor() {
		super();
		this.state = {
			input: "",
			imageUrl: "",
			box: {},
			route: "signin",
			isSignedIn: false,
			robots: [],
			searchfield: "",
			openModal: false,
			modalKind: "",
		};
	}

	resetState = () => {
		this.setState({
			openModal: false,
		});
	};

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
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

	// function below will affect the state of the input
	onInputChange = (event) => {
		console.log(event.target.value);
		this.setState({ input: event.target.value });
		console.log(this.state.input);
	};

	//create function to detect the button click
	onButtonSubmit = () => {
		this.setState({ imageUrl: this.state.input });
		app.models
			.predict("53e1df302c079b3db8a0a36033ed2d15", this.state.input)
			.then((response) => console.log(response))
			.catch((err) => console.log(err));
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

						{/* <Rank /> */}
						{/* onInputChange function will be used to call back to the function in the class when it is used inside the ImageLinkForm component */}
						{/* onButtonSubmit passes the function to the ImageLinkForm.js that will be triggered in the App.js when it is triggered in the ImageLinkForm.js */}
						{/* <ImageLinkForm
							onInputChange={this.onInputChange}
							onButtonSubmit={this.onButtonSubmit}
						/>
						<FaceRecognition imageUrl={this.state.imageUrl} /> */}
					</div>
				) : this.state.route === "signin" ? (
					<SignIn onRouteChange={this.onRouteChange} />
				) : (
					<Register onRouteChange={this.onRouteChange} />
				)}
			</div>
		);
	}
}

export default App;
