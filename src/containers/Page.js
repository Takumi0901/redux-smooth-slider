import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {pushState} from 'redux-router'
import Slider from '../components/Slider'
import {getContentSize, sliding, slideTouchStart, slideTouchMove, clearSlide}  from '../redux/modules/Slider'


class page1 extends Component {

  handleResize(width, height){
    this.props.getContentSize(width, height)
  }

  handleClickSliding(current, slideDirection){
    this.props.sliding(current, slideDirection)
  }
  handleTouchStart(pageX){
    this.props.slideTouchStart(pageX)
  }
  handleTouchMove(pageX){
    this.props.slideTouchMove(pageX)
  }

  render() {
    const {contentWidth, contentHeight, slideCurrent, slideDirection, startPageX, movePageX} = this.props
    return (
      <div>
        <Slider
          items={[
            {image: '/images/001.jpg'},
            {image: '/images/002.jpg'},
            {image: '/images/003.jpg'},
            {image: '/images/004.jpg'},
            {image: '/images/005.jpg'}
          ]}
          contentWidth={contentWidth}
          contentHeight={contentHeight}
          handleResize={this.handleResize.bind(this)}
          handleClickSliding={this.handleClickSliding.bind(this)}
          slideCurrent={slideCurrent}
          slideDirection={slideDirection}
          slideTouchStart={this.handleTouchStart.bind(this)}
          slideTouchMove={this.handleTouchMove.bind(this)}
          startPageX={startPageX}
          movePageX={movePageX}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contentWidth: state.slider.contentWidth,
    contentHeight: state.slider.contentHeight,
    slideCurrent: state.slider.slideCurrent,
    slideDirection: state.slider.slideDirection,
    startPageX: state.slider.startPageX,
    movePageX: state.slider.movePageX
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, {getContentSize, sliding, slideTouchStart, slideTouchMove, clearSlide}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(page1)
