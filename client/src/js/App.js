import React, { Component } from 'react';
import '../css/App.css';
import '../scss/main.scss';
import Game from './components/Game';

class App extends Component {
	render() {
		return(
			<div className="App">
				<h2>Tic Tac Toe</h2>
				<div className="section-reference">
					<a href="https://reactjs.org/tutorial/tutorial.html">Reference: React Tutorial</a>
				</div>
				<Game />
			</div>
		)
	}
}

export default App;
