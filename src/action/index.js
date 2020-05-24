import * as type  from "./../constants/actionTypes"

export const listAll = () =>{
	return ({
		type : type.LIST_ALL
	})
}

export const saveTask = (task) =>{
	return ({
		type : type.SAVE_TASK,
		task
	})
}

export const toggleForm = () => {
	return {
		type : type.TOGGLE_FORM
	}
}
export const closeForm = () => {
	return {
		type : type.CLOSE_FORM
	}
}
export const openForm = () => {
	return {
		type : type.OPEN_FORM
	}
}
export const  updateStatus = (id) =>{
	return({
		type : type.UPDATE_STATUS,
		id
	})
}
export const  deleteTask = (id) =>{
	return({
		type : type.DELETE_TASK,
		id
	})
}

export const  editTask = (task) =>{
	return({
		type : type.EDIT_TASK,
		task
	})
}

export const filterTask = (filter) =>{
	return({
		type : type.FILTER_TABLE,
		filter
	})
}

export const searchKey = (key) =>
{
	return ({
		type : type.SEARCH,
		key
	})
	
}

export const sortTask = (sort) =>
{
	return ({
		type: type.SORT,
		sort
	})
}