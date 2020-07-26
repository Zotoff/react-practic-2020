import {ADD, SUB, ADD_NUMBER} from '../actions/actionTypes';

const initialState = {
    counter: 0
}


// Reducer, обычная функция, которая делает преобразования, принимая в себя state от всего приложения
const counter1 = (state = initialState, action) => {
    switch(action.type) {
        case ADD:
            return {
                counter: state.counter + 1
            }
        case SUB:
            return {
                counter: state.counter - 1
            }
        case ADD_NUMBER:
            return {
                counter: state.counter + action.payload
            }
        default:
            return state // обязательно надо возвращать state
    }
}

export default counter1;