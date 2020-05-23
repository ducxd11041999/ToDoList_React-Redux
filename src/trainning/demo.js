import {createStore} from 'redux';
import {toggleStatus, sort} from './action/index.js'
import myReducer from './reducers/index.js'


const store = createStore(myReducer);
console.log('Default ' , store.getState().status)	
store.dispatch(toggleStatus());
console.log('TOGGLE_STATUS ', store.getState().status)
store.dispatch(sort({
	name : 'Name',
	value: -1
}));
console.log('SORT ', store.getState())


