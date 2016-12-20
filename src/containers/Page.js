import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {pushState} from 'redux-router'
import Slider from '../components/Slider'


class page1 extends Component {
  render() {
    return (
      <div>
        Page1
        <Slider />
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

export default connect(mapStateToProps, mapDispatchToProps)(page1)
