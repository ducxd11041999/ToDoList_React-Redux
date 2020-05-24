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
 var findIndex = (id, tasks) =>
    {
        var result = -1;
        tasks.forEach((task, index) =>
        {
            if(task.id === id){
                result = index;
            }
        })
        return result;
    }
var reducersTasks = (state = initialState , action) =>{
	var id = ''
	var index = -1
	switch(action.type){
		case type.LIST_ALL:
			return state;
		case type.SAVE_TASK:
			var task = {
					id : action.task.id,
					name : action.task.name,
					status: (action.task.status === 'true' || action.task.status === true) ? true : false
				}
			if(!task.id)
			{
				//console.log("add")
				task.id = GenerateID();
				state.push(task);
		    }else{
		    	//console.log("edit")
		    	index = findIndex(task.id, state)
		    	state[index] = task;
		    }
		    localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		case type.UPDATE_STATUS:
	        id = action.id;
	        index = findIndex(id, state);
	        var updateTask = {...state[index]};
	        updateTask.status = !updateTask.status;
	       	state[index] = updateTask;
	        localStorage.setItem('tasks' , JSON.stringify(state));
			return [...state]
		case type.DELETE_TASK:
		 	id = action.id;
        	index = findIndex(id, state)
        //console.log(index)
	        if(index !== -1)
	        {
	            state.splice(index , 1);
	            localStorage.setItem('tasks' , JSON.stringify(state));
	    	}
	    	return [...state]
		default:
	}
	return state
}
export default reducersTasks