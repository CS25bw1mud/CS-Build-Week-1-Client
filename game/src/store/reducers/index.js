import React from "react";
import {
    FETCH_DATA_START, 
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions'


const initialState = {
    data: [],
    isFetching: false,
    error: ''
}

// start, success, failure
//build out functions
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                data: action.payload,
                isFetching: false
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
    }
}
