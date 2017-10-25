import React from 'react'
import { View } from 'react-native'
import { AppNavigation } from './components/app-navigation'
import { AppStatusBar } from './components/app-statusBar'

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <AppStatusBar/>
        <AppNavigation/>
      </View>
    );
  }
}
