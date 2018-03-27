import axios from 'axios';

const URL = 'http://localhost:4000/word';

export function getAllWords() {
    return dispatch => {
        axios.get(URL)
        .then(data => console.log(data))
        .catch(error => console.log(error));
    };
}

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
