import React, {Component} from "react";
import {connect} from "react-redux";
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {getDecksFromDB} from "../utils/api";
import {receiveDecks} from "../actions";

class DeckDetails extends Component {
    static navigationOptions = ({navigation}) => {
        const {title} = navigation.state.params
        return {
            title: title
        }
    }

    componentDidMount() {
        const {dispatch} = this.props;
        getDecksFromDB()
            .then(decks => dispatch(receiveDecks(decks)))
    }

    render() {
        const {title, questions} = this.props.deck;
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 34, textAlign: 'center'}}>
                    {title}
                </Text>
                <Text style={{color: 'darkgrey', textAlign: 'center'}}>
                    {questions.length} Question{questions.length === 1 ? '' : 's'}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 15
    }
});

function mapStateToProps(decks, props) {
    const {title} = props.navigation.state.params
    return {
        deck: decks[title]
    }
}

export default connect(mapStateToProps)(DeckDetails)