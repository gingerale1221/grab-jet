import React, { Component } from 'react';
import './style.css';
import thumbsup from "./thumb-up.png";
import date from "./date.png";
import rating from "./happy.png";

class Grid extends Component {
	render() {
		return (
			<div className="Grid">
				<li className="GridItem">
					<img src={thumbsup} className="GridImage" alt="enjoy the best prices" />
					<p class="GridText">Enjoy the best prices</p>
				</li>
				<li className="GridItem">
					<img src={date} className="GridImage" alt="flexible dates" />
					<p class="GridText">Flexible starting date</p>
					</li>
				<li class="GridItem">
					<img src={rating} className="GridImage" alt="best rating" />
					<p class="GridText">Satisfaction guaranteed</p>
				</li>
			</div>
		);
	}
}

export default Grid;