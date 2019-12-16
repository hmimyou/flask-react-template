import React, { Component } from 'react'
import '../css/App.css'
import '../scss/main.scss'
import Game from './react-game/components/Game'
import TodoListApp from './todo-list/components/TodoListApp'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoListRootReducer from './todo-list/reducers'

const todoListStore = createStore(todoListRootReducer)

class App extends Component {
	render() {
		return(
			<div>
				<div className="App">
					<h2>Tic Tac Toe</h2>
					<div className="section-reference">
						<a href="https://reactjs.org/tutorial/tutorial.html">Reference: React Tutorial</a>
					</div>
					<Game />
				</div>
				<div className="App">
					<h2>TODO List</h2>
					<div className="section-reference">
						<a href="https://redux.js.org/basics/basic-tutorial">Reference: Redux Tutorial</a>
					</div>
					<Provider store={todoListStore}>
						<TodoListApp />
					</Provider>
				</div>
			</div>
		)
	}
}

export default App;
