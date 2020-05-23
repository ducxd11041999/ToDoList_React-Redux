import * as type from './../constants/actionTypes.js'

var initialState = false;
var reducersToggleForm = (state = initialState , action) =>{
	switch(action.type){
		case type.TOGGLE_FORM:
			return !state;
		case type.OPEN_FORM:
			state = true;
			return state;
		case type.CLOSE_FORM:
			state = false;
			return state;
		default:
			break;
	}
	return state
}
export default reducersToggleForm