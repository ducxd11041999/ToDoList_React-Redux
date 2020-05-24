import * as type from './../constants/actionTypes.js'

var initialState = {
	name:'',
	status : -1
};
var reducersFilter = (state = initialState , action) =>{
	switch(action.type){
		case type.FILTER_TABLE:
			return {
				name : action.filter.name,
				status : parseInt(action.filter.status)
			};
		default:
			break;
	}
	return state
}
export default reducersFilter