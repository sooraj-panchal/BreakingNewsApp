import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../container/AppModule/HomeScreen/view';
import ProfileScreen from '../container/AppModule/ProfileScreen/view';
import { getBottomSpace } from "react-native-iphone-x-helper";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

function Tabs({ navigation, state }) {
    // console.log(state)
    return (
        <Tab.Navigator 
            tabBarOptions={{
                style: {
                    backgroundColor: "white",
                    height: 60
                },
                tabStyle: {
                    // backgroundColor: "white",
                    height: 60
                },
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                labelStyle: {
                    fontSize: 14
                },
                // activeBackgroundColor:"red"
            }}

        >
            <Tab.Screen

                name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: () => {
                        return (
                            <View style={{
                                backgroundColor: "red",
                                width: 25,
                                height: 25,
                                borderRadius: 15
                            }} />
                        )
                    },
                }}
            />
            <Tab.Screen name="Search" component={ProfileScreen}
                options={{
                    tabBarIcon: () => {
                        return (
                            <View style={{
                                backgroundColor: "red",
                                width: 25,
                                height: 25,
                                borderRadius: 15
                            }} />
                        )
                    },
                }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon: () => {
                        return (
                            <View style={{
                                backgroundColor: "red",
                                width: 25,
                                height: 25,
                                borderRadius: 15
                            }} />
                        )
                    },
                }} />
            <Tab.Screen name="Alert" component={ProfileScreen}
                options={{
                    tabBarIcon: () => {
                        return (
                            <View style={{
                                backgroundColor: "red",
                                width: 25,
                                height: 25,
                                borderRadius: 15
                            }} />
                        )
                    },
                }} />
        </Tab.Navigator>
    );
}
export default Tabs;