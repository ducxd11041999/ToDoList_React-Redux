import {combineReducers} from 'redux'
import reducerTasks from './tasks.js'
import reducersToggleForm from './isDisplayForm.js'
const myReducer = combineReducers({
	tasks: reducerTasks,
	isDisplayForm: reducersToggleForm
})

export default myReducer