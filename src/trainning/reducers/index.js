
import reducerStatus from './status.js'
import reducerSort from './sort.js'
import { combineReducers } from 'redux'

const myReducer = combineReducers({
 	status: reducerStatus,
 	sort: reducerSort
})
export default myReducer