import {createStore, applyMiddleware, compose} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import {browserHistory} from 'react-router'
import DevTools from '../containers/DevTools'
import createLogger from 'redux-logger'
import rootReducer from './RootReducer'

const reduxRouterMiddleware = routerMiddleware(browserHistory)
const logger = createLogger({logger:console})
export default function configureStore(initialState) {
  let composes = compose(
      applyMiddleware(logger, reduxRouterMiddleware),
      DevTools.instrument()
    )

  const store = createStore(
    rootReducer,
    initialState,
    composes
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./RootReducer', () => {
      const nextRootReducer = require('./RootReducer').default
      store.replaceReducer(nextRootReducer)
    })
  }


  return store
}