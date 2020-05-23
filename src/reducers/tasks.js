import * as type from './../constants/actionTypes.js'

var data = JSON.parse (localStorage.getItem('tasks'))
var initialState = data ? data : [];
var s4 = () => {
        return Math.floor((1+ Math.random()) * 0x10000).toString(16).substring(1);
    }
    var GenerateID = () =>
    {
        return s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() ;
    }
var reducersTasks = (state = initialState , action) =>{
	switch(action.type){
		case type.LIST_ALL:
			return state;
			break;
		case type.ADD_TASK:
			var task = {
				id : GenerateID(),
				name : action.task.name,
				status: (action.task.status === 'true' || action.task.status === true) ? true : false
			}
			state.push(task);
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		default:
			break;
	}
	return state
}
export default reducersTasks