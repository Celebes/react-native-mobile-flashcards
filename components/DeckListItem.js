import React, {Component} from "react";
import {connect} from "react-redux";
import {StyleSheet, View, Text} from 'react-native';

class DeckListItem extends Component {
    render() {
        const {title, numOfQuestions} = this.props;
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{fontSize: 34}}>
                        {title}
                    </Text>
                </View>
                <View>
                    <Text style={{color: 'darkgrey'}}>
                        {numOfQuestions} Questions
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f6ff',
        alignItems: 'center',
        marginBottom: 10,
        padding: 30
    }
});

export default connect()(DeckListItem)