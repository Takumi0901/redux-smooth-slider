import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/reduxStore'
import {Router, Route, Link, BrowserHistory} from 'react-router'
import Root from './containers/Root'

const store = configureStore()

render(
  <Root store={store}/>,
  document.getElementById("root")
)