import {bindActionCreators} from 'redux'
import React, {Component, PropTypes} from 'react'
import {Provider} from 'react-redux'
import routes from '../routes'
import {connect} from 'react-redux'
import {routeActions} from 'react-router-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

class Root extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const {store} = this.props

    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, routeActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)