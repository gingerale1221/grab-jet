import React, { Component } from 'react';
import logo from './logo.png';
import './style.css';

class Logo extends Component {
	render() {
		return (
			<div className="Logo">
				<img src={logo} className="App-logo" alt="logo" />
			</div>
		);
	}
}

export default Logo;