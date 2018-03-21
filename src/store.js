import { createStore, combineReducers } from 'redux';
import { filterStatusReducer } from './reducers/filterStatusReducer'
import { shouldShowFormReducer } from './reducers/shouldShowFormReducer'
import { wordsReducer } from './reducers/wordsReducers'

const reducer = combineReducers({
    filterStatus: filterStatusReducer,
    shouldShowForm: shouldShowFormReducer,
    words: wordsReducer
});

export const store = createStore(reducer);
