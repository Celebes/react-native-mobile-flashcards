import {AsyncStorage} from 'react-native';
import {getResultsFromAsyncStorageOrInitialData, DECKS_STORAGE_KEY} from './_decks';

export function getDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(getResultsFromAsyncStorageOrInitialData);
}

export function getDeck(title) {
    // TODO
}

export function addDeck(title) {
    // TODO
}

export function addCardToDeck({title, card}) {
    // TODO
}