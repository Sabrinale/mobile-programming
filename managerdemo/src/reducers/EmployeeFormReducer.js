import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE
} from '../actions/type';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
};

export default ( state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case EMPLOYEE_UPDATE:
        //action.payload === { prop: 'name, value : 'jane} 
        // the [] is not array but that key 
        // ES6 const newState= {}
        // newState[action.payload.prop] = action.payload.value
        return {...state, [action.payload.prop] : action.payload.prop};
        case EMPLOYEE_CREATE: 
        return INITIAL_STATE;
        default: 
        return state;
    }
};