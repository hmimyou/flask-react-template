import React, { Component } from 'react';
import '../css/App.css';
import Game from './components/Game';

class App extends Component {
	render() {
		return(
			<div className="App">
				<h1>Tic Tac Toe</h1>
				<Game />
			</div>
		)
	}
}

export default App;
