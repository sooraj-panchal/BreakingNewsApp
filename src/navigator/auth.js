import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import LoginScreen from '../container/AuthModule/LoginScreen';
const StackScreen = createStackNavigator();

const AuthStackScreen = () => {
    return (
        <StackScreen.Navigator
            initialRouteName="Login"
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS
            }}
            headerMode="none"
        >
            <StackScreen.Screen
                name="Login"
                component={LoginScreen}
            />
        </StackScreen.Navigator>
    )
}
export default AuthStackScreen;
