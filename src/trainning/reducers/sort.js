import * as type from './../constant/type.js'
var initialState = {
	by : 'name',
	value: 1
}
var reducerSort = (state = initialState , action) =>{
	if(action.type === type._SORT )
	{
		var {by, value } = action.sort;
		//var status = state;
		return ({
			by, value
		}) 
	}
	return state;
}

export default reducerSort