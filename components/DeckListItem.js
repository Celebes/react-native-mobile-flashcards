import React, {Component} from "react";
import {connect} from "react-redux";
import {StyleSheet, View, Text, TouchableOpacity, Animated} from 'react-native';

class DeckListItem extends Component {
    state = {
        bounceValue: new Animated.Value(1),
    }

    onDeckPress = () => {
        const {title, navigate} = this.props;
        const {bounceValue} = this.state;
        Animated.sequence([
            Animated.timing(bounceValue, { duration: 50, toValue: 0.7}),
            Animated.spring(bounceValue, { toValue: 1, friction: 4})
        ]).start();
        setTimeout(() => navigate({key: 'DeckDetails', routeName: 'DeckDetails', params: {title}}), 100);
    }

    render() {
        const {bounceValue} = this.state;
        const {title, numOfQuestions} = this.props;
        return (
            <TouchableOpacity onPress={this.onDeckPress}>
                <Animated.View style={[styles.container, {transform: [{scale: bounceValue}]}]}>
                    <View>
                        <Text style={{fontSize: 34, textAlign: 'center'}}>
                            {title}
                        </Text>
                    </View>
                    <View>
                        <Text style={{color: 'darkgrey', textAlign: 'center'}}>
                            {numOfQuestions} Question{numOfQuestions === 1 ? '' : 's'}
                        </Text>
                    </View>
                </Animated.View>
            </TouchableOpacity>
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