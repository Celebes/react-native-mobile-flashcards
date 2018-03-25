import React, {Component} from "react";
import {connect} from "react-redux";
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {getDecksFromDB} from "../utils/api";
import {receiveDecks} from "../actions";

class Quiz extends Component {
    state = {
        currentCard: 0,
        numOfCorrect: 0,
        showAnswer: false
    }

    componentDidMount() {
        const {dispatch} = this.props;
        getDecksFromDB()
            .then(decks => dispatch(receiveDecks(decks)))
    }

    correct = () => {
        this.setState((state) => ({
            currentCard: state.currentCard + 1,
            numOfCorrect: state.numOfCorrect + 1,
            showAnswer: false
        }));
    }

    incorrect = () => {
        this.setState((state) => ({
            currentCard: state.currentCard + 1,
            showAnswer: false
        }));
    }

    showAnswer = () => {
        this.setState(() => ({showAnswer: true}));
    }

    render() {
        const {currentCard, numOfCorrect, showAnswer} = this.state;
        const {title} = this.props.navigation.state.params;
        const {questions} = this.props.deck;

        return (
            <View style={styles.container}>
                <Text style={{textAlign: 'center'}}>Quiz for {title}</Text>
                {currentCard < questions.length ?
                    <View>
                        <Text style={{textAlign: 'center'}}>Question number {currentCard + 1}/{questions.length}</Text>

                        <Text style={{textAlign: 'center', fontSize: 20, color: '#7fbeff', margin: 20}}>
                            {questions[currentCard].question}
                        </Text>

                        {showAnswer ?

                            <View style={{justifyContent: 'space-around'}}>
                                <Text style={{textAlign: 'center', fontSize: 20, color: '#ff47d8', margin: 20}}>
                                    {questions[currentCard].answer}
                                </Text>
                                <TouchableOpacity onPress={this.correct}
                                                  style={[styles.btn, {backgroundColor: '#0f0'}]}>
                                    <Text style={styles.btnText}>
                                        Correct
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.incorrect}
                                                  style={[styles.btn, {backgroundColor: '#f00'}]}>
                                    <Text style={styles.btnText}>
                                        Incorrect
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            :

                            <View>
                                <TouchableOpacity onPress={this.showAnswer} style={styles.btn}>
                                    <Text style={styles.btnText}>
                                        Show Answer
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        }

                    </View>
                    :
                    <View>
                        <Text style={{textAlign: 'center'}}>
                            Quiz finished!
                        </Text>
                        <Text style={{textAlign: 'center'}}>
                            You've answered {numOfCorrect} out of {questions.length} questions correctly!
                        </Text>
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 15,
    }, btn: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 10,
    }, btnText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});

function mapStateToProps(decks, props) {
    const {title} = props.navigation.state.params
    return {
        deck: decks[title]
    }
}

export default connect(mapStateToProps)(Quiz)