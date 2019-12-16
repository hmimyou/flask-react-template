import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import rootReducer from '../reducers'

class TodoListApp extends Component {
  constructor(props) {
    super(props)
    this.store = createStore(rootReducer)
  }

  render() {
    return (
			<Provider store={this.store}>
        <div>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
			</Provider>
    )
  }
}

export default TodoListApp
