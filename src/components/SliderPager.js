import React from'react'

export default class SliderPager extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { pageNum, itemLength } = this.props
    return (
      <div className="c-slider__pager"><p className="c-slider__pager__inner">{pageNum} / {itemLength}</p></div>
    )
  }
}

SliderPager.propTypes = {
  pageNum: React.PropTypes.number,
  itemLength: React.PropTypes.number
}