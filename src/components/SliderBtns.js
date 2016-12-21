import React from'react'

export default class SliderBtns extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { handleNextSliding, handlePrevSliding } = this.props
    return (
      <div>
        <div className="c-slider__btn-wrap c-slider__btn-wrap--next">
          <div
            className="c-slider__btn c-slider__btn--next"
            onClick={handleNextSliding}
          ></div>
        </div>
        <div className="c-slider__btn-wrap c-slider__btn-wrap--prev">
          <div
            className="c-slider__btn c-slider__btn--prev"
            onClick={handlePrevSliding}
          ></div>
        </div>
      </div>
    )
  }
}

SliderBtns.propTypes = {
  handleNextSliding: React.PropTypes.func,
  handlePrevSliding: React.PropTypes.func
}