const WORDS = [
    { _id: 'abc1', en: 'One', vn: 'Một', isMemorized: true },
    { _id: 'abc2', en: 'Two', vn: 'Hai', isMemorized: false },
    { _id: 'abc3', en: 'Three', vn: 'Ba', isMemorized: false },
    { _id: 'abc4', en: 'Four', vn: 'Bốn', isMemorized: true },
]

export function wordsReducer(state = WORDS, action) {
    if (action.type === 'ADD_WORD') return state.concat(action.word);
    if (action.type === 'REMOVE_WORD') {
        return state.filter(word => word._id !== action._id);
    }
    if (action.type === 'TOGGLE_IS_MEMORIZED') {
        return state.map(word => {
            if (word._id !== action._id) return word;
            return { ...word, isMemorized: !word.isMemorized };
        });
    }
    return state;
}
