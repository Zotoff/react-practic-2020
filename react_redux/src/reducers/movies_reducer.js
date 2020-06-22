// const data = {
//     type: 'MOVIES_LIST',
//     payload: [
//         {id: 182, name: 'Pulp fiction'}
//     ]
// }
import {MOVIES_LIST} from '../types';

// Reducer is a function that matches a type of an action and returns a payload if the type matches

export default function(state = null, action){
    switch(action.type){
        case MOVIES_LIST:
            return action.payload; // update the store
        default:
            return state;
    }
}