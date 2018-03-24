import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import Decks from './components/Decks';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import {Constants} from 'expo'

function UdaciStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={styles.container}>
                    <UdaciStatusBar backgroundColor='#000' barStyle="light-content"/>
                    <Decks/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});