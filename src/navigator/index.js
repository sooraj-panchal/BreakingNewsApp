import React, { useEffect, useState } from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import AuthStackScreen from './auth';
import { PrimaryColor } from '../assets/colors';
import SplashScreen from '../container/AuthModule/SplashScreen';
import * as globals from '../utils/globals';
import { asyncUserDataWatcher } from '../store/actions';
import { asyncUserDataLoading, asyncUserDataSelector } from '../store/selectors/whiteListSelector';
import AppStackScreen from './unAuth';
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContainer = ({
    asyncUserDataWatcher,
    asyncUserDataResponse,
    asyncUserDataLoading
}) => {
    const [loading, setLoading] = useState(true)

    const StackScreen = createStackNavigator();
    const RootStack = createStackNavigator();
    const [token, setToken] = useState(null)
    useEffect(() => {
        setLoading(true)
        // asyncUserDataWatcher()
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);

        getUserData()
        // if (asyncUserDataResponse) {
        //     console.log("asyncUserDataResponse", asyncUserDataResponse)
        //     globals.authToken = asyncUserDataResponse?.token
        //     globals.user_id = asyncUserDataResponse?.user_data?.id
        // }
    }, [])

    const getUserData = async () => {
        const res = await AsyncStorage.getItem("userData")
        const data = await JSON.parse(res)
        if (data) {
            setToken(data.token)
            globals.authToken = data.token
            globals.user_id = data.user_data.id
            console.log("data", data)
        }
    }
    if (loading) {
        return (
            <StackScreen.Navigator
                initialRouteName="Splash"
                headerMode="none"
                screenOptions={{
                    ...TransitionPresets.RevealFromBottomAndroid,
                    animationEnabled: false
                }}
            >
                <StackScreen.Screen
                    name="Splash"
                    component={SplashScreen}
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
    if (token)
        return (
            <RootStack.Navigator
                headerMode="none"
                screenOptions={{
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            >
                <RootStack.Screen
                    name="AppStack"
                    component={AppStackScreen}
                />
                <RootStack.Screen
                    name="AuthStack"
                    component={AuthStackScreen}
                />
            </RootStack.Navigator>
        )
    return (
        <RootStack.Navigator
            headerMode="none"
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            <RootStack.Screen
                name="AuthStack"
                component={AuthStackScreen}
            />
            <RootStack.Screen
                name="AppStack"
                component={AppStackScreen}
            />
        </RootStack.Navigator>
    )
}

const mapStateToProps = store => {
    return {
        asyncUserDataResponse: asyncUserDataSelector(store),
        asyncUserDataLoading: asyncUserDataLoading(store)
    }
}

const mapDispatchToProps = {
    asyncUserDataWatcher
};
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);