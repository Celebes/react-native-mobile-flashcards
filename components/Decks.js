import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {getDecks} from '../utils/api';
import {receiveDecks} from '../actions';
import DeckListItem from './DeckListItem';
import {transformDecksToListArray} from "../utils/helpers";

class Decks extends Component {
    componentDidMount() {
        const {dispatch} = this.props;

        getDecks()
            .then(decks => dispatch(receiveDecks(decks)))
    }

    renderItem = ({item}) => {
         return <DeckListItem {...item}/>
    };

    render() {
        const decksList = transformDecksToListArray(this.props.decks);

        return (
            <View style={styles.container}>
                <Text style={{alignSelf: 'center'}}>
                    DECKS
                </Text>
                <FlatList data={decksList} renderItem={this.renderItem}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
    }
});

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Decks)