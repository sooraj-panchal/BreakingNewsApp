import React from "react";
import { Dimensions, Platform, StatusBar, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../container/AppModule/HomeScreen';
import Ionicons from "react-native-vector-icons/Ionicons";
import { PrimaryColor } from "../assets/colors";
import NotificationScreen from "../container/AppModule/NotificationScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "../container/AppModule/ChatScreen";
import { getStatusBarHeight } from "../utils/globals";
import { vs } from "../utils/styleUtils";

const StackScreen = createStackNavigator()
const ChatStack = ({ }) => {

    return (
        <StackScreen.Navigator
        >
            <StackScreen.Screen
                name="Chat"
                component={ChatScreen}
                options={({ navigation, route }) => {
                    return ({
                        headerStyle: {
                            headerStatusBarHeight: StatusBar.currentHeight,
                            backgroundColor: "white",
                            elevation: 0,
                            // height: 60
                        },
                        headerLeftContainerStyle: {
                            // paddingLeft: 10
                        },
                        headerTitleStyle: {
                            // marginTop: 20,
                            fontSize: 25,
                            fontWeight: "bold"
                        },
                        headerTitleAlign: "left",
                        headerTintColor: "black"
                    })
                }}
            />
        </StackScreen.Navigator>
    )
}

const AlertStack = ({ }) => {
    return (
        <StackScreen.Navigator
        >
            <StackScreen.Screen
                name="Notification"
                component={NotificationScreen}
                options={({ navigation, route }) => {
                    return ({
                        headerStatusBarHeight: getStatusBarHeight(),
                        headerStyle: {
                            backgroundColor: "white",
                            elevation: 0,
                            // height: 60
                        },
                        headerLeftContainerStyle: {
                            // paddingLeft: 10
                        },
                        headerTitleStyle: {
                            // marginTop: 20,
                            fontSize: 25,
                            fontWeight: "bold"
                        },
                        headerTitleAlign: "left",
                        headerTintColor: "black"
                    })
                }}
            />
        </StackScreen.Navigator>
    )
}
const HomeStack = () => {
    return (
        <StackScreen.Navigator
        >
            <StackScreen.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation, route }) => {
                    return ({
                        headerTitle: "Post",
                        headerStatusBarHeight: getStatusBarHeight(),
                        headerStyle: {
                            backgroundColor: "white",
                            elevation: 0,
                            // height: 80,
                        },
                        headerRightContainerStyle: {
                            paddingRight: 20,
                            // paddingTop: 20,
                        },
                        headerTitleStyle: {
                            fontSize: 25,
                            fontWeight: "bold",
                            // paddingTop: 20
                        },
                        headerTitleAlign: "left",
                        headerTintColor: "black",
                    })
                }}
            />
        </StackScreen.Navigator>
    )
}
const Tab = createBottomTabNavigator()

function Tabs({ navigation, route }) {
    const { width } = Dimensions.get("screen")
    const CustomTabIconContainer = ({ focused, children }) => {
        return (
            <View style={{
                height: vs(50),
                justifyContent: "center",
                alignItems: "center"
            }} >
                {children}
                {focused &&
                    <View
                        style={{
                            position: "absolute",
                            bottom: 0,
                            backgroundColor: PrimaryColor,
                            width: 35,
                            height: 2
                        }}
                    />
                }
            </View>
        )
    }
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: "white",
                    borderTopWidth: 0,
                    borderRadius: 100,
                    position: "absolute",
                    marginHorizontal: width * 0.20,
                    paddingHorizontal: 10,
                    bottom: 20,
                    paddingTop: Platform.OS == "ios" ? 20 : 0,
                    shadowOffset: { width: 2, height: 2 },
                    shadowOpacity: 0.2,
                    height: Platform.OS == "ios" && 60
                },
                activeTintColor: PrimaryColor,
                inactiveTintColor: 'gray',
                showLabel: false,
            }}
        >
            <Tab.Screen
                name="Home" component={HomeStack}

                options={() => {
                    return ({
                        tabBarIcon: ({ color, focused }) => {
                            return (
                                <CustomTabIconContainer focused={focused} >
                                    <Ionicons name="md-home" size={30} color={color} />
                                </CustomTabIconContainer>
                            )
                        },
                    })
                }}

            />
            <Tab.Screen name="ChatStack" component={ChatStack}
                options={{
                    tabBarLabel: "Alert",
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <CustomTabIconContainer focused={focused} >
                                <Ionicons name="chatbubble-ellipses" size={30} color={color} />
                            </CustomTabIconContainer>
                        )
                    },
                }}
                listeners={{
                    tabPress: e => {
                        e.preventDefault()
                        navigation.navigate("ChatDetail")
                    },
                }}
            />
            <Tab.Screen name="AlertStack" component={AlertStack}
                options={{
                    tabBarLabel: "Alert",
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <CustomTabIconContainer focused={focused} >
                                <Ionicons name="ios-notifications" size={30} color={color} />
                            </CustomTabIconContainer>
                        )
                    },
                }} />
        </Tab.Navigator>
    );
}
export default Tabs;