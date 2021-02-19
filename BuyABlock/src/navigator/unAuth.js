import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../container/AppModule/HomeScreen/view';
import ProfileScreen from '../container/AppModule/ProfileScreen/view';
import { PrimaryColor } from '../assets/colors';
import Tabs from './Tabs';

const StackScreen = createStackNavigator();

const AppStackScreen = () => {
    return (
        <StackScreen.Navigator
            initialRouteName="Tabs"
            screenOptions={{
                headerStatusBarHeight: 0
            }}
        >
            <StackScreen.Screen
                name="Tabs"
                component={Tabs}
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
                name="Home"
                component={HomeScreen}
                options={({ navigation, route }) => {
                    // console.log(route.params)
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
                options={{
                    headerShown: false,
                    // headerTitle: ""
                }}
            />

        </StackScreen.Navigator>
    )
}
export default AppStackScreen;
