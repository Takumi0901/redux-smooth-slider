import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import DevTools from './DevTools'


class App extends Component {
  constructor(props) {
    super(props)
  }

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

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, {}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

App.propTypes = {
  children: React.PropTypes.object.isRequired
}