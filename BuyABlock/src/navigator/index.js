import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppStackScreen from './unAuth';
import AuthStackScreen from './auth';
const RootStack = createStackNavigator();
const AppContainer = ({ navigation }) => {
    
    return (
            // <AppStackScreen />
            <AuthStackScreen />
    )
}

export default AppContainer;