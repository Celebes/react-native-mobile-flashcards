import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import Decks from './components/Decks';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import {Constants} from 'expo'
import {TabNavigator, StackNavigator} from 'react-navigation';
import AddDeck from './components/AddDeck';
import DeckDetails from './components/DeckDetails';

function UdaciStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const MainTabs = TabNavigator({
    Decks: {
        screen: Decks,
        navigationOptions: {
            title: 'Decks'
        }
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            title: 'Add Deck'
        }
    }
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        style: {
            backgroundColor: '#000'
        }
    }
});

const MainStack = StackNavigator({
    Home: {
        screen: MainTabs
    },
    DeckDetails: {
        screen: DeckDetails
    }
}, {
    navigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#000',
            height: 40
        }
    },
});

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={styles.container}>
                    <UdaciStatusBar backgroundColor='#000' barStyle="light-content"/>
                    <MainStack/>
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