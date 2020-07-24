const redux = require('redux');

const initialState = {
    counter: 0
}

// Reducer, обычная функция, которая делает преобразования, принимая в себя state от всего приложения
// action - объект с полем type, который переключает их
const reducer = (state=initialState, action) => {

    if(action.type == 'ADD'){
        return {
            counter: state.counter + 1
        }
    }

    if(action.type == 'SUB'){
        return {
            counter: state.counter - 1
        }
    }

    if(action.type == 'ADD_NUMBER'){
        return {
            counter: state.counter + action.value
        }
    }

    // Обязательно возвращается новый state
    return state;

}

// Store, где хранятся все данные, для ВСЕГО приложения. В него передается reducer, который его изменяет. 
// На изменение store реагируют компоненты реакта и получаем динамическое изменение информации
const store = redux.createStore(reducer);
// console.log('1', store.getState()); // забираем текущее состояние state

// Actions - для изменения store, объект с полем type
const addCounter = {
    type: 'ADD'
}

// Dispatch - метод, в котором передается сам action
store.dispatch(addCounter);
// console.log('2', store.getState());

store.dispatch({
    type: 'SUB'
});
// console.log('3', store.getState());

store.dispatch({
    type: 'ADD_NUMBER',
    value: 10
});
// console.log('4', store.getState());

// Подписываемся на изменения store
store.subscribe(()=>{
    console.log('Subscribe', store.getState())
})