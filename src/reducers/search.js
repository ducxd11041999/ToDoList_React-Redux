import * as type from './../constants/actionTypes.js'

var initialState = ''
var reducersSearch = (state = initialState , action) =>{
	switch(action.type){
		case type.SEARCH:
			return action.key;
		default:
			break;
	}
	return state
}
export default reducersSearch