import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions';
import { FETCH_GAMEINFO_START, FETCH_GAMEINFO_SUCCESS, FETCH_GAMEINFO_FAILURE } from '../actions';
import { FETCH_INIT_START, FETCH_INIT_SUCCESS,  FETCH_INIT_FAILURE } from '../actions';



const initialState = {
	data: [ ],
	initInfo: [],
	isFetching: false,
	error: ''
};

// start, success, failure
//build out functions
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA_START:
			return {
				...state,
				isFetching: true,
				error: ''
			};
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				data: action.payload,
				isFetching: false,
				error: ''
			};
		case FETCH_DATA_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload
			};
		case FETCH_GAMEINFO_START:
			return {
				...state,
				isFetching: true,
				error: ''
			};
		case FETCH_GAMEINFO_SUCCESS:
			return {
				...state,
				isFetching: false,
				data: action.payload,
				error: ''
			};
		case FETCH_GAMEINFO_FAILURE:
			return {
				...state,
				isFetching: false,
				errror: action.payload
			};
		case FETCH_INIT_START:
			return {
				...state,
				isFetching: true,
				error: ''
			};
		case FETCH_INIT_SUCCESS:
			return {
				...state,
				isFetching: false,
				initInfo: action.payload,
				error: ''
			}
		case FETCH_INIT_FAILURE:
			return {
				...state,
				isFetching: false,
				errror: action.payload
			}




			
		default:
			return state;
	}
};
