import axios from 'axios';

const URL = 'http://localhost:4000/word';

export function getAllWords() {
    return dispatch => {
        axios.get(URL)
        .then(response => {
            dispatch({ type: 'SET_WORDS', words: response.data.words });
        })
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
    return dispatch => {
        axios.post(URL, { en, vn })
        .then(response => {
            if (!response.data.success) return alert(response.data.error);
            dispatch({ type: 'ADD_WORD', word: response.data.word });
        })
        .catch(error => console.log(error));
    };
}

export function removeWord(_id) {
    return dispatch => {
        axios.delete(`${URL}/${_id}`)
        .then(response => {
            dispatch({ type: 'REMOVE_WORD', _id });
        })
        .catch(error => console.log(error));
    };
}

export function toggleIsMemorized(_id, isMemorized) {
    return dispatch => {
        axios.put(`${URL}/${_id}`, { isMemorized })
        .then(response => {
            if (!response.data.success) return alert(response.data.error);
            dispatch({ type: 'TOGGLE_IS_MEMORIZED', _id });
        })
        .catch(error => console.log(error));
    };
}
