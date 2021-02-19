import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PrimaryColor } from '../assets/colors';
import LoginScreen from '../container/AuthModule/LoginScreen';
import RegisterScreen from '../container/AuthModule/RegisterScreen';

const StackScreen = createStackNavigator();

const AuthStackScreen = () => {
    return (
        <StackScreen.Navigator
            initialRouteName="Login"
            // screenOptions={{
            //     headerStatusBarHeight: 10
            // }}
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
                name="Register"
                component={RegisterScreen}
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
