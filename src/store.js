import { createStore } from 'redux';

const defaultState = {
    isShowForm: false,
    filterStatus: 'SHOW_ALL',
    words: [
        { _id: 'abc1', en: 'One', vn: 'Một', isMemorized: true },
        { _id: 'abc2', en: 'Two', vn: 'Hai', isMemorized: false },
        { _id: 'abc3', en: 'Three', vn: 'Ba', isMemorized: false },
        { _id: 'abc4', en: 'Four', vn: 'Bốn', isMemorized: true },
    ]
};

function reducer(state = defaultState, action) {
    return state;
}

export const store = createStore(reducer);