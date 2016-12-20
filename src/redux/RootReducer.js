import {combineReducers} from "redux"
import {sliderReducer} from "./modules/Slider"

export default combineReducers({
  slider: sliderReducer
})