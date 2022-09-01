//importing types constants 
import { UPDATE_NETINFO, UPDATE_USER, UPDATE_SETTINGS } from './types';

//exporting action creator
export const updateNetinfo = (value)=>{
    return {
        type: UPDATE_NETINFO,
        payload: value,
    };
};

//exporting action creator
export const updateUser = (value)=>{
    return {
        type: UPDATE_USER,
        payload: value,
    };
};

//exporting action creator
export const updateSettings = (value)=>{
    return {
        type: UPDATE_SETTINGS,
        payload: value,
    };
};