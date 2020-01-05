import React, { Component } from 'react'
import '../css/app.css'
import '../scss/main.scss'
import Game from './react-game/components/Game'
import TodoListApp from './todo-list/components/TodoListApp'
import { NavLink, Route, Switch } from 'react-router-dom'

const App = () => (
	<div>
	  <h1>Flask + React Template Project</h1>
	  <div>
			This is a template for creating a simple web server using Flask and React.
			Below are example apps by React / Redux:
		</div>
		<div className="nav">
			<ul>
				<li>
					<NavLink to="/tic-toc-game" activeClassName="selected">
						Tic Toc Game
					</NavLink>
				</li>
				<li>
					<NavLink to="/todo-list" activeClassName="selected">
						TODO List
					</NavLink>
				</li>
			</ul>
		</div>
		<hr />
		<Switch>
			<Route path="/tic-toc-game">
				<div className="sub-app">
					<h2>Tic Tac Toe</h2>
					<div className="section-reference">
						<a href="https://reactjs.org/tutorial/tutorial.html">Reference: React Tutorial</a>
					</div>
					<Game />
				</div>
			</Route>
			<Route path="/todo-list">
				<div className="sub-app">
					<h2>TODO List</h2>
					<div className="section-reference">
						<a href="https://redux.js.org/basics/basic-tutorial">Reference: Redux Tutorial</a>
					</div>
					<TodoListApp />
				</div>
			</Route>
		</Switch>
	</div>
)

export default App;
