import React, { Component } from 'react';
import { clientId } from "../../keys/oauthClientId";

class GoogleAuth extends Component {

	state = {
		isSignedIn: null
	};

	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId,
				scope: 'email'
			}).then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();
				this.setState({
					isSignedIn: this.auth.isSignedIn.get()
				});
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		});
	}

	onAuthChange = () => {
		this.setState({ isSignedIn: this.auth.isSignedIn.get() });
	};

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return null;
		} else if (this.state.isSignedIn) {
			return (
				<button onClick={this.onSignOut} className="ui   red google button">
					<i className=" google icon" />
					Sign Out
				</button>
			);
		} else {
			return (
				<button onClick={this.onSignIn} className="ui   red google button">
					<i className=" google icon" />
					Sign In with Google
				</button>
			);
		}

	}

	onSignIn = () => {
		this.auth.signIn();
	};

	onSignOut = () => {
		this.auth.signOut();
	};

	render() {
		return (
			<div style={{ position: "absolute", top: "20px", right: "40px" }}>
				{this.renderAuthButton()}
			</div>
		);
	}
}

export default GoogleAuth;
