import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import ProfileScreen from '../container/AppModule/ProfileScreen/view';
import Tabs from './Tabs';
import NewsDetailScreen from '../container/AppModule/NewsDetailScreen';
import ChatDetailScreen from '../container/AppModule/ChatDetailScreen';
import { getStatusBarHeight } from '../utils/globals';

const StackScreen = createStackNavigator();
const AppStackScreen = () => {
    return (
        <StackScreen.Navigator
            initialRouteName="Tabs"
            screenOptions={{
                headerStatusBarHeight: getStatusBarHeight(),
                headerStyle: {
                    backgroundColor: "#f2f2f2"
                },
                headerBackTitleVisible: false,
                headerLeftContainerStyle: {
                    paddingLeft: 10
                },
                headerTintColor: "white",
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            <StackScreen.Screen
                name="Tabs"
                component={Tabs}
                options={({ }) => {
                    return ({
                        headerShown: false
                    })
                }}
            />
            <StackScreen.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                }}
            />
            <StackScreen.Screen
                name="NewsDetail"
                component={NewsDetailScreen}
                options={({ }) => {
                    return ({
                        headerTitle: "Back",
                        headerStyle: {
                            backgroundColor: "white",
                            elevation: 0,
                            shadowOpacity:0
                        },
                        headerTitleStyle: {
                            fontSize: 18,
                            right: 10
                        },
                        headerBackTitle: false,
                        headerTitleAlign: "left",
                        headerTintColor: "black",
                    })
                }}
            />
            <StackScreen.Screen
                name="ChatDetail"
                component={ChatDetailScreen}
                options={({ }) => {
                    return ({
                        headerTitle: "Chat with Walter Nava",
                        headerStyle: {
                            backgroundColor: "white",
                            elevation: 0,
                            shadowOpacity:0
                        },
                        headerTitleStyle: {
                            fontSize: 18,
                            right: 10
                        },
                        headerBackTitle: false,
                        headerTitleAlign: "left",
                        headerTintColor: "black",
                    })
                }}
            />
        </StackScreen.Navigator>
    )
}
export default AppStackScreen;
