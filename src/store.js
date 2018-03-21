import { createStore } from 'redux';

const defaultState = {
    shouldShowForm: false,
    filterStatus: 'SHOW_ALL',
    words: [
        { _id: 'abc1', en: 'One', vn: 'Một', isMemorized: true },
        { _id: 'abc2', en: 'Two', vn: 'Hai', isMemorized: false },
        { _id: 'abc3', en: 'Three', vn: 'Ba', isMemorized: false },
        { _id: 'abc4', en: 'Four', vn: 'Bốn', isMemorized: true },
    ]
};

function reducer(state = defaultState, action) {
    if (action.type === 'SET_FILTER_STATUS') {
        return { ...state, filterStatus: action.filterStatus }
    }
    if (action.type === 'TOGGLE_SHOULD_SHOW_FORM') {
        return  {...state, shouldShowForm: !state.shouldShowForm }
    }
    if (action.type === 'ADD_WORD') {
        return {
            ...state,
            words: state.words.concat(action.word),
            shouldShowForm: false
        }
    }
    if (action.type === 'REMOVE_WORD') {
        return {
            ...state,
            words: state.words.filter(word => word._id !== action._id) 
        }
    }
    if (action.type === 'TOGGLE_IS_MEMORIZED') {
        return {
            ...state,
            words: state.words.map(word => {
                if (word._id !== action._id) return word;
                return { ...word, isMemorized: !word.isMemorized }
            }) 
        }
    }
    return state;
}

export const store = createStore(reducer);
