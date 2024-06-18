const { createStore, applyMiddleware, combineReducers } = require('redux');
const { createLogger } = require('redux-logger');

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
const DISPLAY = 'DISPLAY';
const HIDE = 'HIDE';


const incrementCounter = (count = 1) => ({
    type: INCREMENT_COUNTER,
    payload: count
})

const decrementCounter = (count = 1) => ({
    type: DECREMENT_COUNTER,
    payload: count
})

/*___________________________________________*/

const dispaly = () => ({
    type: DISPLAY,
})

const hide = () => ({
    type: HIDE,
})

/*___________________________________________*/

let countInitialState = {
    count: 0,
}

let showInitialState = {
    show: true
}

/*___________________________________________*/

const countReducer = (state = countInitialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                count: state.count + action.payload
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                count: state.count - action.payload
            }
        default:
            return state
    }
}

/*___________________________________________*/

const showReducer = (state = showInitialState, action) => {
    switch (action.type) {
        case DISPLAY:
            return {
                ...state,
                show : true
            }
        case HIDE:
            return {
                ...state,
                show :  false
            }
        default:
            return state
    }
}

let rootReducers = combineReducers({
    show : showReducer,
    count : countReducer
})

let store = createStore(rootReducers, applyMiddleware(createLogger()))


let unsubscribe = store.subscribe(() => { })

store.dispatch(incrementCounter(2))
store.dispatch(dispaly())
store.dispatch(decrementCounter(1));
store.dispatch(hide())
store.dispatch(dispaly())
unsubscribe()