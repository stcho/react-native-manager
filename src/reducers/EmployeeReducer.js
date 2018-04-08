import {
	EMPLOYEES_GET_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMPLOYEES_GET_SUCCESS:
			return action.payload;
		default:
			return state;
	}
};
