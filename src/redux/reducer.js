//importing types constants 
import { UPDATE_NETINFO, UPDATE_USER, UPDATE_SETTINGS } from './types';

//setting initial state
const initialState = {
    netInfo: '', 
    user: {}, 
    settings: null
};

//reducer function
const reduxReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NETINFO:
          return {
            ...state,
            netInfo: action.payload,
            };
        case UPDATE_USER:
            return {
                ...state,
                user: action.payload,
            };
        case UPDATE_SETTINGS:
            return {
                ...state,
                settings: action.payload,
            };
        default:
            return state;
    }
};

export default reduxReducer;