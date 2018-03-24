export function transformDecksToListArray(decks) {
    return Object.keys(decks).map(k => {
            return {
                key: k,
                title: k,
                numOfQuestions: decks[k]['questions'] ? decks[k]['questions'].length : 0
            }
        }
    );
}