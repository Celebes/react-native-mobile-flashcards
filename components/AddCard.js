import React, {Component} from "react";
import {connect} from "react-redux";
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {addCardToDeck} from '../actions';
import {addCardToDeckInDB} from '../utils/api';
import {NavigationActions} from 'react-navigation'

class AddCard extends Component {
    state = {
        qText: '',
        aText: ''
    }

    submit = () => {
        const {qText, aText} = this.state;
        const {title} = this.props.navigation.state.params;

        const titleAndCard = {
            title,
            card: {
                question: qText,
                answer: aText
            }
        };

        this.props.dispatch(addCardToDeck(titleAndCard));

        addCardToDeckInDB(titleAndCard);

        this.setState(() => ({
            qText: '',
            aText: ''
        }));

        this.props.navigation.navigate({key: 'DeckDetails', routeName: 'DeckDetails', params: {title}})
    }

    render() {
        const {qText, aText} = this.state;
        const {title} = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <Text style={{fontSize: 24, textAlign: 'center'}}>
                    Add Card to {title}
                </Text>
                <Text style={{fontSize: 34, textAlign: 'center'}}>
                    Question:
                </Text>
                <TextInput style={{height: 40, margin: 15, alignSelf: 'stretch'}}
                           onChangeText={(text) => this.setState({qText: text})}
                           value={qText}/>
                <Text style={{fontSize: 34, textAlign: 'center'}}>
                    Answer:
                </Text>
                <TextInput style={{height: 40, margin: 15, alignSelf: 'stretch'}}
                           onChangeText={(text) => this.setState({aText: text})}
                           value={aText}/>
                <TouchableOpacity onPress={this.submit}
                                  style={qText.length === 0 || aText.length === 0 ? styles.submitBtnDisabled : styles.submitBtn}
                                  disabled={qText.length === 0 || aText.length === 0}>
                    <Text style={styles.submitBtnText}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 15,
    }, submitBtn: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
    }, submitBtnDisabled: {
        backgroundColor: '#AAA',
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
    }, submitBtnText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default connect()(AddCard)