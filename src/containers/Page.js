import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from '../components/Slider'
import {getContentSize, sliding, slideTouchStart, slideTouchMove, clearSlide}  from '../redux/modules/Slider'


class page1 extends Component {

  handleResize(width){
    this.props.getContentSize(width)
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
    const {contentWidth, slideCurrent, slideDirection, startPageX, movePageX} = this.props
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

page1.propTypes = {
  getContentSize: React.PropTypes.func,
  sliding: React.PropTypes.func,
  slideTouchStart: React.PropTypes.func,
  slideTouchMove: React.PropTypes.func,
  contentWidth: React.PropTypes.number,
  slideCurrent: React.PropTypes.number,
  slideDirection: React.PropTypes.string,
  startPageX: React.PropTypes.any,
  movePageX: React.PropTypes.number
}
