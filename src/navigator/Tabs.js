import React, { useRef } from "react";
import { Dimensions, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../container/AppModule/HomeScreen';
import Ionicons from "react-native-vector-icons/Ionicons";
import { PrimaryColor } from "../assets/colors";
import SavedScreen from "../container/AppModule/SavedScreen";
import NotificationScreen from "../container/AppModule/NotificationScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "../container/AppModule/ChatScreen";
import ChatDetailScreen from "../container/AppModule/ChatDetailScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Label from "../components/Label";
import { semiBold } from "../assets/fonts/fonts";
import { AuthStack } from "./navActions";
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
                        headerTitle: "Trending",
                        // headerStatusBarHeight:30,
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
    // const name = getFocusedRouteNameFromRoute({...route.state})
    // console.log(route.state.index)
    const { width, height } = Dimensions.get("screen")

    // let borderBottomVisible;
    // switch (route.state.index) {
    //     case 0:
    //         borderBottomVisible = true
    //         break;
    //     case 1:
    //         borderBottomVisible = 
    //         break;
    //     case 2:
    //         borderBottomVisible = true
    //         break;
    //     default:
    //         break;
    // }
    const CustomTabIconContainer = ({ focused, children }) => {
        return (
            <View style={{
                height: 50,
                justifyContent: "center",
                alignItems: "center"
            }} >
                {children}
                {focused &&
                    <View
                        style={{
                            position: "absolute",
                            bottom: 0,
                            backgroundColor: "red",
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
                    // backfaceVisibility:"hidden",
                    backgroundColor: "white",
                    // height: 60,
                    borderTopWidth: 0,
                    borderRadius: 100,
                    position: "absolute",
                    marginHorizontal: width * 0.20,
                    // width:300,
                    bottom: 20,
                    // alignSelf:"center",
                },
                tabStyle: {
                    // borderRadius:5,
                    // backgroundColor: "red",
                    // height: 60,
                    // alignItems: "center",
                    // borderBottomColor: "red",
                    // bottom:2,
                    // marginHorizontal: 15,
                    // width: 10,
                    // borderBottomWidth:2,
                },
                activeTintColor: PrimaryColor,
                // activeBackgroundColor:"red",
                inactiveTintColor: 'gray',
                labelStyle: {
                    fontSize: 14
                },
                showLabel: false,
                // activeBackgroundColor:"red"
            }}
        >
            <Tab.Screen
                name="Home" component={HomeStack}

                options={({ navigation, route }) => {
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