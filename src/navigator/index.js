import React, { useEffect, useState } from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import AuthStackScreen from './auth';
import { PrimaryColor } from '../assets/colors';
import SplashScreen from '../container/AuthModule/SplashScreen';
import * as globals from '../utils/globals';
import { asyncBuyerDataWatcher } from '../store/actions';
import { asyncBuyerDataLoading, asyncBuyerDataSelector } from '../store/selectors/whiteListSelector';
import AppStackScreen from './unAuth';
import { connect } from 'react-redux'

const AppContainer = ({
    asyncBuyerDataWatcher,
    asyncBuyerDataResponse,
    asyncBuyerDataLoading
}) => {
    const [loading, setLoading] = useState(true)

    const StackScreen = createStackNavigator();
    const RootStack = createStackNavigator();

    useEffect(() => {
        setLoading(true)
        // asyncBuyerDataWatcher()
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
        if (asyncBuyerDataResponse) {
            console.log(asyncBuyerDataResponse)
            globals.buyer_id = asyncBuyerDataResponse?.buyer_id
        }
    }, [asyncBuyerDataResponse])

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
    if (!asyncBuyerDataResponse?.buyer_id)
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
        asyncBuyerDataResponse: asyncBuyerDataSelector(store),
        asyncBuyerDataLoading: asyncBuyerDataLoading(store)
    }
}

const mapDispatchToProps = {
    asyncBuyerDataWatcher
};
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);