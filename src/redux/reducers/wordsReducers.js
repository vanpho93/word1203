export function wordsReducer(state = [], action) {
    if (action.type === 'SET_WORDS') return action.words;
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
