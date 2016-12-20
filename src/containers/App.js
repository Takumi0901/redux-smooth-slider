import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import {ReactRouter, Link} from 'react-router';
import { connect } from 'react-redux'
import DevTools from './DevTools'
import {pushState} from 'redux-router'

class App extends Component {
  componentWillMount() {}

  render() {
    const {children} = this.props
    return (
      <div>
        <div className="c-container">
          {children}
        </div>
        {/*<DevTools />*/}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, {}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)