import * as type from './../constants/actionTypes.js'

var initialState ={
	by : '',
	value: -1
} 
var reducersSort = (state = initialState , action) =>{
	switch(action.type){
		case type.SORT:
			console.log(action)
			return action.sort;
		default:
			break;
	}
	return state
}
export default reducersSort