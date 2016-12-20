import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './containers/App'
import Page from './containers/Page'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Page}/>
    <Route path="page" component={Page}/>
  </Route>
)
