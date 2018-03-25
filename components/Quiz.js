import React, {Component} from "react";
import {connect} from "react-redux";
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

class Quiz extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Quiz</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 15,
    }
});

export default connect()(Quiz)