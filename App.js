import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './navigation/MealsNavigator';
import { createStore, combineReducers } from 'redux';
import mealsReducer from './store/reducers/meals';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  meal: mealsReducer
})

const store = createStore(rootReducer);

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false
    }
  }


  fetchFonts = () => {
    return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })
  }


  updateFontLoadedStatus = () => {
    this.setState({
      fontLoaded: true
    })
  }

  render() {

    if (!this.state.fontLoaded) {
      return (
        <AppLoading startAsync={this.fetchFonts} onFinish={this.updateFontLoadedStatus} />
      )
    }


    return (
      <Provider store = {store}><MealsNavigator /></Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
