import React from'react'
import {PropTypes} from 'react'

export default class Slider extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {handleResize, contentWidth, imageData} = this.props
    handleResize(this.refs.slider.clientWidth, this.refs.slider.clientHeight)
    window.addEventListener('resize', this.handleResize.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }

  /** リサイズされるたびにSliderのWidthを取得 **/
  handleResize(){
    const {handleResize} = this.props

    handleResize(this.refs.slider.clientWidth, this.refs.slider.clientHeight)
  }


  /** nextボタン Click **/
  handleNextSliding(){
    const {handleClickSliding, slideCurrent, items} = this.props
    if(slideCurrent == items.length){
      handleClickSliding(slideCurrent + 1, 'next')
      setTimeout(function () {
        handleClickSliding(1, 'next')
      }, 250)

    }else{
      handleClickSliding(slideCurrent + 1, 'next')
    }
  }


  /** prevボタン Click **/
  handlePrevSliding(){
    const {handleClickSliding, slideCurrent, items} = this.props
    if(slideCurrent == 1){
      handleClickSliding(slideCurrent - 1)
      setTimeout(function () {
        handleClickSliding(items.length, 'prev')
      }, 250)
    }else{
      handleClickSliding(slideCurrent - 1, 'prev')
    }
  }


  /** SPのみ touchされた座標を取得 **/
  onTouchStart(e){
    const {slideTouchStart} = this.props
    slideTouchStart(e.changedTouches[0].pageX)
  }


  /** SPのみ touchされた座標からtouchMoveされた距離を計算 **/
  onTouchMove(e){
    const {slideTouchMove, startPageX} = this.props
    let moveX = startPageX - e.changedTouches[0].pageX

    if(moveX > 30){
      e.preventDefault()
      slideTouchMove(160)
    }else if(moveX < -30){
      e.preventDefault()
      slideTouchMove(-160)
    }
  }


  /** SPのみ touchが離れたらSlideさせる **/
  onTouchEnd(){
    const {movePageX} = this.props
    if(movePageX > 0){
      this.handleNextSliding()
    }else if(movePageX < 0){
      this.handlePrevSliding()
    }

  }

  render() {
    const {items, contentWidth, contentHeight, slideCurrent, slideDirection, movePageX,} = this.props

    const itemsLength = items && items.length

    {/** initialize **/}
    let pageNum, beforeClone, afterClone, contentStyle, itemStyle
    let distance = -contentWidth * slideCurrent - movePageX


    {/** slider style **/}
    if(slideCurrent == 1 && slideDirection == 'next'){
      pageNum = 1
      contentStyle = {
        width: contentWidth * itemsLength + (contentWidth * 2),
        WebkitTransform: 'translate3d(' + -contentWidth + 'px, 0, 0)',
        transform: 'translate3d(' + -contentWidth + 'px, 0, 0)'
      }
    }else if(slideCurrent == itemsLength && slideDirection === 'prev'){
      pageNum = itemsLength
      contentStyle = {
        width: contentWidth * itemsLength + (contentWidth * 2),
        WebkitTransform: 'translate3d(' + -contentWidth * itemsLength + 'px, 0, 0)',
        transform: 'translate3d(' + -contentWidth * itemsLength + 'px, 0, 0)'
      }
    }else{
      if(slideCurrent == 0){
        pageNum = 1
      }else if(slideCurrent > itemsLength){
        pageNum = itemsLength
      }else {
        pageNum = slideCurrent
      }
      contentStyle = {
        width: contentWidth * itemsLength + (contentWidth * 2),
        transition: '-webkit-transform 300ms ease',
        transition: 'transform 300ms ease',
        WebkitTransform: 'translate3d(' + distance + 'px, 0, 0)',
        transform: 'translate3d(' + distance + 'px, 0, 0)'
      }
    }

    {/** slider__item style **/}
    itemStyle = {
      width: contentWidth
    }

    {/** item map **/}
    const item = items && items.map((item, e) => {
        return (
          <li key={e} className="c-slider__item" style={itemStyle}>
            <div className="c-slider__item__inner">
              <img src={item.image} alt=""/>
            </div>
          </li>
        )
      })


    {/** beforeClone ループ用 **/}
    beforeClone = <li className="c-slider__item" style={itemStyle}>
      <div className="c-slider__item__inner">
        <img src={items[item.length - 1].image} alt=""/>
      </div>
    </li>


    {/** afterClone ループ用 **/}
    afterClone = <li className="c-slider__item" style={itemStyle}>
      <div className="c-slider__item__inner">
        <img src={items[0].image} alt=""/>
      </div>
    </li>


    return (
      <div
        className={'c-slider'}
        ref="slider"
        id="slider"
        onTouchStart={this.onTouchStart.bind(this)}
        onTouchMove={this.onTouchMove.bind(this)}
        onTouchEnd={this.onTouchEnd.bind(this)}
      >
        <ul className="c-slider__content" style={contentStyle}>
          {/** ループさせるために最初と最後の画像を配置 **/}
          {beforeClone}
          {item}
          {afterClone}
        </ul>
        <div className="c-slider__btn-wrap c-slider__btn-wrap--next">
          <div
            className="c-slider__btn c-slider__btn--next"
            onClick={this.handleNextSliding.bind(this)}
          ></div>
        </div>
        <div className="c-slider__btn-wrap c-slider__btn-wrap--prev">
          <div
            className="c-slider__btn c-slider__btn--prev"
            onClick={this.handlePrevSliding.bind(this)}
          ></div>
        </div>
        <div className="c-slider__pager"><p className="c-slider__pager__inner">{pageNum} / {itemsLength}</p></div>

      </div>
    )
  }
}


Slider.prpTypes = {
  items: React.PropTypes.array,
  classes: React.PropTypes.array,
  type: React.PropTypes.string
};