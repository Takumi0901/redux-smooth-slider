// Action types
export const GET_CONTENT_SIZE = 'GET_CONTENT_SIZE'
export const SLIDING = 'SLIDING'
export const SLIDE_TOUCH_START = 'SLIDE_TOUCH_START'
export const SLIDE_TOUCH_MOVE = 'SLIDE_TOUCH_MOVE'
export const SLIDE_CLEAR = 'SLIDE_CLEAR'

// Action
export function getContentSize(width, height) {
  return {
    type: GET_CONTENT_SIZE,
    contentWidth: width,
    contentHeight: height
  }
}

export function sliding(slideCurrent, slideDirection) {
  return {
    type: SLIDING,
    slideCurrent: slideCurrent,
    slideDirection: slideDirection
  }
}

export function slideTouchStart(pageX) {
  return {
    type: SLIDE_TOUCH_START,
    startPageX: pageX
  }
}

export function slideTouchMove(pageX) {
  return {
    type: SLIDE_TOUCH_MOVE,
    movePageX: pageX
  }
}

export function clearSlide() {
  return {
    type: SLIDE_CLEAR
  }
}


const InitialState = {contentWidth: 1, contentHeight: 1, slideCurrent: 1, slideDirection: '', startPageX: {}, movePageX: 0}

// Reducer
export function sliderReducer(state = {
  contentWidth: 1,
  contentHeight: 300,
  slideCurrent: 1,
  slideDirection: '',
  startPageX: {},
  movePageX: 0
}, action) {
  const {type} = action
  switch (type) {
    case GET_CONTENT_SIZE:
      return Object.assign({}, state, {contentWidth: action.contentWidth, contentHeight: action.contentHeight})
    case SLIDING:
      return Object.assign({}, state, {slideCurrent: action.slideCurrent, slideDirection: action.slideDirection, movePageX: 0})
    case SLIDE_TOUCH_START:
      return Object.assign({}, state, {startPageX: action.startPageX,})

    case SLIDE_TOUCH_MOVE:
      return Object.assign({}, state, {movePageX: action.movePageX})

    case SLIDE_CLEAR:
      return Object.assign({}, state, {contentWidth: 1, contentHeight: 1, slideCurrent: 1, slideDirection: '', startPageX: {}, movePageX: 0})

    default:
      return state;
  }
}

