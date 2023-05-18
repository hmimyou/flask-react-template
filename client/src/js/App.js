import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import Game from './react-game/components/Game'
import TodoListApp from './todo-list/components/TodoListApp'
import UsefulUtils from './useful-utils/components/UsefulUtils'
import UsefulLayouts from './useful-layouts/components/UsefulLayouts'
import {default as RedditApiApp } from './reddit-api/App'

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
				<li>
					<NavLink to="/reddit-api" activeClassName="selected">
						Reddit API
					</NavLink>
				</li>
				<li>
					<NavLink to="/useful-utils" activeClassName="selected">
						Useful Utilities
					</NavLink>
				</li>
				<li>
					<NavLink to="/useful-layouts" activeClassName="selected">
						Useful Layouts
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
			<Route path="/reddit-api">
				<div className="sub-app">
					<h2>Reddit API Demo</h2>
					<div className="section-reference">
						<a href="https://redux.js.org/advanced/advanced-tutorial">Reference: Redux Advanced Tutorial</a>
					</div>
					<RedditApiApp />
				</div>
			</Route>
			<Route path="/useful-utils">
				<div className="sub-app">
					<h2>Useful Utilities</h2>
					<UsefulUtils />
				</div>
			</Route>
			<Route path="/useful-layouts">
				<div className="sub-app">
					<h2>Useful Layouts</h2>
					<UsefulLayouts />
				</div>
			</Route>
		</Switch>
	</div>
)

export default App;
