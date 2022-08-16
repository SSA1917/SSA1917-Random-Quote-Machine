
import {DATES} from './Datos.js';
const initialState = {
    dates: [],
    authors: [] 
};//accion


export default function rootReducer( state = initialState , action ){//reductor
    switch(action.type){
        case DATES :
            return {
                ...state,
                dates: action.payload,
                authors: action.Users
            };
        default:
            return state;
    }
};



