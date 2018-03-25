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
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.upperInnerContainer}>
                    <Text style={{fontSize: 34, textAlign: 'center'}}>
                        {title}
                    </Text>
                    <Text style={{color: 'darkgrey', textAlign: 'center'}}>
                        {questions.length} Question{questions.length === 1 ? '' : 's'}
                    </Text>
                </View>
                <View style={styles.lowerInnerContainer}>
                    {
                        questions.length > 0 &&
                        <TouchableOpacity style={styles.btn}
                                          onPress={() => navigate({key: 'Quiz', routeName: 'Quiz', params: {}})}>
                            <Text style={styles.btnText}>
                                Start Quiz
                            </Text>
                        </TouchableOpacity>
                    }

                    <TouchableOpacity style={styles.btn}
                                      onPress={() => navigate({key: 'AddCard', routeName: 'AddCard', params: {}})}>
                        <Text style={styles.btnText}>
                            Add Card
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 15,
        justifyContent: 'space-between'
    }, upperInnerContainer: {
        flex: 1,
    }, lowerInnerContainer: {
        justifyContent: 'space-around',
        padding: 50
    }, btn: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 10
    }, btnText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    }
});

function mapStateToProps(decks, props) {
    const {title} = props.navigation.state.params
    return {
        deck: decks[title]
    }
}

export default connect(mapStateToProps)(DeckDetails)