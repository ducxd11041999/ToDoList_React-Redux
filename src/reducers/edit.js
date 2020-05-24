import * as type from './../constants/actionTypes.js'

var initialState = {
	id: '',
	name: '',
	status: true
};
var reducersEditTask = (state = initialState , action) =>{
	switch(action.type){
		case type.EDIT_TASK:
			state = action.task
			return state;
		default:
			break;
	}
	return state
}
export default reducersEditTask