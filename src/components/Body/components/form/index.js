import React, { Component } from 'react';
import './style.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class Form extends Component {
	render() {
		return (
			<div className="Form">
				<div className="Itinerary">
					<div className="Field-pickup">
						<h2 class="Header-small">Pick-up</h2>
						<h3 class="Header-large">Changi Airport Private Terminal</h3>
					</div>
					<div className="Field-dropoff">
						<h2 class="Header-small">Drop-off</h2>
						<h3 class="Header-large">Phuket Island Airport</h3>
					</div>
				</div>
				<div className="Addon">
					<div className="Dropdown">
						<Dropdown className="dropDown-component" options={options} onChange={this._onSelect} value={''} placeholder="Select add-on"/>
					</div>
					<DayPicker />
				</div>
				<div className="Button">
					<button className="CallToAction" type="button">Request A Jet <div className="Price">$199</div></button>
				</div>
			</div>
		);
	}
}

const options = ['Flight Attendant (+$300)', 'Full Kitchen (+$100)', 'Massage (+$50)', 'Jacuzzi (+180)']
export default Form;