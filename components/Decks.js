import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {getDecksFromDB} from '../utils/api';
import {receiveDecks} from '../actions';
import DeckListItem from './DeckListItem';
import {transformDecksToListArray} from "../utils/helpers";

class Decks extends Component {
    componentDidMount() {
        const {dispatch} = this.props;

        getDecksFromDB()
            .then(decks => dispatch(receiveDecks(decks)))
    }

    renderItem = ({item}) => {
         return <DeckListItem navigate={this.props.navigation.navigate} {...item}/>
    };

    render() {
        const decksList = transformDecksToListArray(this.props.decks);

        return (
            <View style={styles.container}>
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
        paddingTop: 15
    }
});

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Decks)