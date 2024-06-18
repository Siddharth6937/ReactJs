const {createStore, applyMiddleware } = require('redux');
const {createLogger } = require('redux-logger');

/*
    Action
    {
        type: 'INCREMENT_COUNTER'
    }
 */

    // Action Type Constants
    const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
    const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

    // Action Creators: Functions which returns object
    const incrementCounter = (count = 1) => ({
        type: INCREMENT_COUNTER,
        payload: count
    })

    const decrementCounter = (count = 1) => ({
        type: DECREMENT_COUNTER,
        payload: count
    })

/*
    REDUCER FUNCTION
        - Define the initial state (Central State)
        - Function with two parameters - prevState, action
        - Contains logic to return the updated state on the basis of action type
 */

let initialState = {
    count : 0,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT_COUNTER :
            return {
                count: state.count + action.payload
            }
        case DECREMENT_COUNTER :
            return {
                count : state.count - action.payload
            }
        default:
            return state
    }
}

/*
    REDUX STORE
    - store = createStore
    - store.subscribe
 */

    // Create the store
    let store = createStore(reducer, applyMiddleware(createLogger()))

    // Subscribe to the store (Returns reference to unsubscribe method)
    let unsubscribe = store.subscribe(() => {})

    // Get the current state of the redux store
    console.log(store.getState())

    // Dispatch action to cause state updates
    store.dispatch(incrementCounter(2))
    store.dispatch(decrementCounter(1));
    // console.log(store.getState())
    // store.dispatch(incrementCounter(4))
    // console.log(store.getState())
    // store.dispatch(incrementCounter())
    // console.log(store.getState())
    // store.dispatch(incrementCounter(7))
    // console.log(store.getState())

    unsubscribe()