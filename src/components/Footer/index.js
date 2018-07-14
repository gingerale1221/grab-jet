import React, { Component } from 'react';
import './style.css';

class Footer extends Component {
	render() {
		return (
			<div className="Footer">
				<footer className="App-footer">
					<div className="Footer-menu">
							<li className="Footer-link">GrabLimo</li>
							<li className="Footer-link">GrabCruise</li>
							<li className="Footer-link">GrabCopter</li>
					</div>
					<div className="copyright-div">
						<p className="Copyright">Copyright Grab.com 2017. All Rights Reserved.</p>
					</div>
        </footer>
			</div>
		);
	}
}
export default Footer;