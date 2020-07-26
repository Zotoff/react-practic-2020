import {ADD2} from '../actions/actionTypes'

const initialState = {
    counter2: 50
}


// Reducer, обычная функция, которая делает преобразования, принимая в себя state от всего приложения
const counter2 = (state = initialState, action) => {
    switch(action.type) {
        case ADD2:
            return {
                counter2: state.counter2 + action.payload
            }
        default:
            return state // обязательно надо возвращать state
    }
}

export default counter2;