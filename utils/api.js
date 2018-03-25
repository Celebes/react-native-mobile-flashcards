import {AsyncStorage} from 'react-native';
import {getResultsFromAsyncStorageOrInitialData, DECKS_STORAGE_KEY} from './_decks';

export function getDecksFromDB() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(getResultsFromAsyncStorageOrInitialData);
}

export function addDeckToDB(title) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }))
}

export function addCardToDeckInDB({title, card}) {
    // TODO
}