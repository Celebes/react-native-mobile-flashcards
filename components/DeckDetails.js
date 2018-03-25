import React, {Component} from "react";
import {connect} from "react-redux";
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

class DeckDetails extends Component {
    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params
        return {
            title: title
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Deck details!</Text>
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

export default connect()(DeckDetails)