import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import facebookPage from './screens/fb';
import instagramPage from './screens/in';

export default class App extends React.Component {
    render() {
        return (
            <AppContainer/>
        )
    }
}

const TabNavigator = createBottomTabNavigator({
  FaceBook : {screen: facebookPage},
  Instagram: {screen: instagramPage},
});

const switchNavigator = createSwitchNavigator({
  TabNavigator: {screen: TabNavigator}
});
  
const AppContainer = createAppContainer(switchNavigator);

