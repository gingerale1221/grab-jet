import React, { Component } from 'react';
import './style.css';
import Form from './components/form';
import Grid from './components/grid';

class Body extends Component {
	render() {
		return (
			<div className="Body">
				<div className="App-body">
					<Form />
					<Grid />
				</div>
			</div>
		);
	}
}

export default Body;