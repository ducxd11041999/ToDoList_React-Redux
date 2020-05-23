import * as type from './../constant/type.js'
var initialState = false ; 

var reducerStatus = (state = initialState , action) =>{
	if(action.type === type._TOGGLE_STATUS){
		state = !state
	}
	return state;
}

export default reducerStatus