export function setFilterStatus(filterStatus) {
    return { type: 'SET_FILTER_STATUS', filterStatus };
}

export function toggleShouldShowForm() {
    return { type: 'TOGGLE_SHOULD_SHOW_FORM' };
}

export function addWord(en, vn) {
    const word = { _id: Math.random() + '', en, vn, isMemorized: false };
    return { type: 'ADD_WORD', word };
}

export function removeWord(_id) {
    return { type: 'REMOVE_WORD', _id };
}

export function toggleIsMemorized(_id) {
    return { type: 'TOGGLE_IS_MEMORIZED', _id };
}
