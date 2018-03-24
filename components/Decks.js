import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text} from 'react-native';
import {getDecks} from '../utils/api';
import {receiveDecks} from '../actions';
import {AppLoading} from 'expo';

class Decks extends Component {
    state = {
        ready: false,
    }

    componentDidMount() {
        const {dispatch} = this.props

        getDecks()
            .then(decks => dispatch(receiveDecks(decks)))
            .then(() => this.setState(() => ({ready: true})))
    }

    render() {
        const {decks} = this.props
        const {ready} = this.state

        if (ready === false) {
            return <AppLoading/>
        }

        return (
            <View style={styles.container}>
                <Text>
                    DECKS
                </Text>
                <Text>
                    {JSON.stringify(decks)}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Decks)