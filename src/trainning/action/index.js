import * as type from './../constant/type.js'

export const toggleStatus = () =>{

	return ({
		type : type._TOGGLE_STATUS
	})
}

export const sort = (sort) =>
{
	return ({
		type: type._SORT,
		sort
	})
}