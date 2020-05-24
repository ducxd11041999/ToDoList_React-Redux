import {combineReducers} from 'redux'
import reducerTasks from './tasks.js'
import reducersToggleForm from './isDisplayForm.js'
import reducersEditTask from './edit.js'
import reducersFilter from './filter.js'
import reducersSearch from './search.js'

const myReducer = combineReducers({
	tasks: reducerTasks,
	isDisplayForm: reducersToggleForm,
	itemEdit: reducersEditTask,
	filter : reducersFilter,
	search : reducersSearch
})

export default myReducer