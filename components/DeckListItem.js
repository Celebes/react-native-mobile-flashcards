import React, {Component} from "react";
import {connect} from "react-redux";
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

class DeckListItem extends Component {
    render() {
        const {title, numOfQuestions, navigate} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigate('DeckDetails')}>
                    <View>
                        <Text style={{fontSize: 34, textAlign: 'center'}}>
                            {title}
                        </Text>
                    </View>
                    <View>
                        <Text style={{color: 'darkgrey', textAlign: 'center'}}>
                            {numOfQuestions} Questions
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f6ff',
        alignItems: 'center',
        marginBottom: 15,
        padding: 30
    }
});

export default connect()(DeckListItem)