import React, {Component} from "react";
import {connect} from "react-redux";
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {NavigationActions} from 'react-navigation'
import {addDeck} from '../actions';
import {addDeckToDB} from '../utils/api';

class AddDeck extends Component {
    state = {
        inputText: ''
    }

    submit = () => {
        const {inputText} = this.state;

        this.props.dispatch(addDeck({
            [inputText]: {
                title: inputText,
                questions: []
            }
        }));

        addDeckToDB(inputText);

        this.setState(() => ({
            inputText: ''
        }));

        this.props.navigation.navigate({key: 'DeckDetails', routeName: 'DeckDetails', params: {inputText}})
    }

    render() {
        const {inputText} = this.state;

        return (
            <View style={styles.container}>
                <Text style={{fontSize: 34, textAlign: 'center'}}>
                    What is the title of your new deck?
                </Text>
                <TextInput style={{height: 40, margin: 15, alignSelf: 'stretch'}}
                           onChangeText={(text) => this.setState({inputText: text})}
                           value={inputText}/>
                <TouchableOpacity onPress={this.submit}
                                  style={inputText.length === 0 ? styles.submitBtnDisabled : styles.submitBtn}
                                  disabled={inputText.length === 0}>
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
        paddingTop: 15
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

export default connect()(AddDeck)