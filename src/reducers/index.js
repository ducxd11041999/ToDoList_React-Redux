import {combineReducers} from 'redux'
import reducerTasks from './tasks.js'
import reducersToggleForm from './isDisplayForm.js'
import reducersEditTask from './edit.js'
const myReducer = combineReducers({
	tasks: reducerTasks,
	isDisplayForm: reducersToggleForm,
	itemEdit: reducersEditTask
})

export default myReducer