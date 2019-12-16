import React, { Component } from 'react'
import '../css/app.css'
import '../scss/main.scss'
import Game from './react-game/components/Game'
import TodoListApp from './todo-list/components/TodoListApp'

const App = () => (
	<div>
		<div className="sub-app">
			<h2>Tic Tac Toe</h2>
			<div className="section-reference">
				<a href="https://reactjs.org/tutorial/tutorial.html">Reference: React Tutorial</a>
			</div>
			<Game />
		</div>
		<div className="sub-app">
			<h2>TODO List</h2>
			<div className="section-reference">
				<a href="https://redux.js.org/basics/basic-tutorial">Reference: Redux Tutorial</a>
			</div>
			<TodoListApp />
		</div>
	</div>
)

export default App;
