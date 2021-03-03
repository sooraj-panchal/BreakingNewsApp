import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import ProfileScreen from '../container/AppModule/ProfileScreen/view';
import Tabs from './Tabs';
import NewsDetailScreen from '../container/AppModule/NewsDetailScreen';
import ChatDetailScreen from '../container/AppModule/ChatDetailScreen';
import { StatusBar } from 'react-native';

const StackScreen = createStackNavigator();
const AppStackScreen = () => {
    return (
        <StackScreen.Navigator
            initialRouteName="Tabs"
            screenOptions={{
                headerStatusBarHeight:StatusBar.currentHeight,
                headerStyle: {
                    backgroundColor: "#f2f2f2"
                },
                headerLeftContainerStyle: {
                    paddingLeft: 10
                },
                // cardStyle:{
                //     // backgroundColor:"white"
                // },
                headerTintColor: "white",
                ...TransitionPresets.SlideFromRightIOS,
                // animationEnabled:false
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
                        // headerShown: false,
                        headerTitle: "Back",
                        headerStyle: {
                            backgroundColor: "white",
                            elevation: 0
                        },
                        headerTitleStyle: {
                            fontSize: 18,
                            right: 10
                            // fontWeight: "bold",
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
                        headerTitle: "Admin",
                        headerStyle: {
                            backgroundColor: "white",
                            elevation: 0,
                            // height: 60+StatusBar.currentHeight,
                        },
                        headerTitleStyle: {
                            fontSize: 18,
                            right: 10
                            // fontWeight: "bold",
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
