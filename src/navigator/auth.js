import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { PrimaryColor } from '../assets/colors';
import LoginScreen from '../container/AuthModule/LoginScreen';
import VerificationScreen from '../container/AuthModule/VerificationScreen';
import ProfileScreen from '../container/AppModule/ProfileScreen';

const StackScreen = createStackNavigator();

const AuthStackScreen = () => {
    return (
        <StackScreen.Navigator
            initialRouteName="Login"
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS
                // headerStatusBarHeight: 0
            }}
            headerMode="none"
        >
            <StackScreen.Screen
                name="Login"
                component={LoginScreen}
                options={({ navigation, route }) => {
                    return ({
                        // headerShown: false,
                        headerStyle: {
                            backgroundColor: PrimaryColor,
                        },
                        headerTintColor: "white"
                        // headerTitle: ""
                    })
                }}
            />
            <StackScreen.Screen
                name="Verification"
                component={VerificationScreen}
                options={({ navigation, route }) => {
                    return ({
                        // headerShown: false,
                        headerStyle: {
                            backgroundColor: PrimaryColor,
                        },
                        headerTintColor: "white"
                        // headerTitle: ""
                    })
                }}
            />
            <StackScreen.Screen
                name="Profile"
                component={ProfileScreen}
                options={({ navigation, route }) => {
                    return ({
                        // headerShown: false,
                        headerStyle: {
                            backgroundColor: PrimaryColor,
                        },
                        headerTintColor: "white"
                        // headerTitle: ""
                    })
                }}
            />
        </StackScreen.Navigator>
    )
}
export default AuthStackScreen;
