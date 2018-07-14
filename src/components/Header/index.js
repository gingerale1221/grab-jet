import React, { Component } from 'react';
import './style.css';
import Logo from './Logo';
import Menu from './Menu';

class Header extends Component {
	render() {
		return (
			<div className="Header">
				<header className="App-header">
					<Logo />
    			<Menu />
        </header>
			</div>
		);
	}
}
export default Header;