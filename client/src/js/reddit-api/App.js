import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import AsyncApp from './container/AsyncApp'
import 'babel-polyfill'

const store = configureStore()

export default () => (
  <Provider store={store}>
    <AsyncApp />
  </Provider>
)