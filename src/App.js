import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation.js";
import Logo from "./components/Logo/Logo.js";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./components/Rank/Rank.js";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition.js";
import SignIn from "./components/SignIn/SignIn.js";
import Register from "./components/Register/Register.js";
import Clarifai from "clarifai";

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
		};
	}

	onRouteChange = (route) => {
		if (route === "signout") {
			this.setState({ isSignedIn: false });
		} else if (route === "home") {
			this.setState({ isSignedIn: true });
		}
		this.setState({ route: route });
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

	render() {
		return (
			<div className="App">
				<Navigation
					isSignedIn={this.state.isSignedIn}
					onRouteChange={this.onRouteChange}
				/>
				{this.state.route === "home" ? (
					<div>
						<Logo />
						<Rank />
						{/* onInputChange function will be used to call back to the function in the class when it is used inside the ImageLinkForm component */}
						{/* onButtonSubmit passes the function to the ImageLinkForm.js that will be triggered in the App.js when it is triggered in the ImageLinkForm.js */}
						<ImageLinkForm
							onInputChange={this.onInputChange}
							onButtonSubmit={this.onButtonSubmit}
						/>
						<FaceRecognition imageUrl={this.state.imageUrl} />
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
