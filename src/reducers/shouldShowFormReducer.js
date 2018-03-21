export function shouldShowFormReducer(state = false, action) {
    if (action.type === 'TOGGLE_SHOULD_SHOW_FORM') return !state;
    if (action.type === 'ADD_WORD') return false;
    return state;
}
