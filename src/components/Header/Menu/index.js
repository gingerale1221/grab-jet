import React, { Component } from 'react';
import './style.css';

class Menu extends Component {
	render() {
		return (
			<div className="Menu">
					<div className="menuItem"><li>GrabLimo</li></div>
					<div className="menuItem"><li>GrabCruise</li></div>
					<div className="menuItem"><li>GrabCopter</li></div>
			</div>
		);
	}
}

export default Menu;