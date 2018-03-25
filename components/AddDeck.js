import React, {Component} from "react";
import {connect} from "react-redux";
import {StyleSheet, View, Text} from 'react-native';

class AddDeck extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ADD DECK</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default connect()(AddDeck)