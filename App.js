import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  View, StatusBar, StyleSheet, Platform, ActivityIndicator
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PrimaryColor, redColor } from './src/assets/colors';
import AppContainer from './src/navigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from './src/store';
// import { enableScreens } from 'react-native-screens';

// enableScreens()

const getBottomSpace = 40

const App = () => {
  // const MyTheme = {
  //   ...DefaultTheme,
  //   colors: {
  //     ...DefaultTheme.colors,
  //     primary: 'rgb(255, 45, 85)',
  //   },
  // };
  const _renderStatusBar = () => {
    if (Platform.OS === "ios") {
      return <View style={styles.header} >
        <AppContainer />
        <StatusBar backgroundColor={redColor} barStyle="light-content" />
      </View>
    } else {
      return <>
        <StatusBar backgroundColor={redColor} barStyle="light-content" />
        <AppContainer />
      </>
    }
  }
  const { store, persistor } = configureStore();

  return (
    <SafeAreaProvider>
      {/* <SafeAreaView style={{flex:1,backgroundColor:"red"}} > */}
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <NavigationContainer
            theme={{ colors: { background: PrimaryColor } }}
          >
            {_renderStatusBar()}
          </NavigationContainer>
        </PersistGate>
      </Provider>
      {/* </SafeAreaView> */}

    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: PrimaryColor,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // padding: 10,
    // height: 60,
    // ...ifIphoneX({
    //   paddingTop: 50
    // }, {
    //   paddingTop: 20
    // }),
    // paddingTop: getStatusBarHeight() + 10,
    marginBottom: getBottomSpace
  },
});

export default App;
