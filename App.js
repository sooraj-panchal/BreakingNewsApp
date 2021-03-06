import {  NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  View, StatusBar, StyleSheet, Platform, ActivityIndicator, LogBox
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PrimaryColor } from './src/assets/colors';
import AppContainer from './src/navigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from './src/store';
import { NotificationHandler } from './src/utils/NotificationService';
import { isReadyRef, navigationRef } from './NavigationHandler';

// import { enableScreens } from 'react-native-screens';

// enableScreens()
LogBox.ignoreAllLogs(true)
const getBottomSpace = 40

const App = () => {
  useEffect(() => {
    NotificationHandler()
    // createNotificationListeners()
  }, [])

  const _renderStatusBar = () => {
    if (Platform.OS === "ios") {
      return <View style={styles.header} >
        <AppContainer />
        <StatusBar backgroundColor={"transparent"} barStyle="light-content" translucent />
      </View>
    } else {
      return <>
        <StatusBar backgroundColor={"transparent"} barStyle="light-content" translucent />
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
            theme={{ colors: { background: "#3F1314" } }}
            ref={navigationRef}
            onReady={() => {
              isReadyRef.current = true;
            }}
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
    marginBottom: getBottomSpace
  },
});

export default App;
