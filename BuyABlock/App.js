// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  View, StatusBar, StyleSheet
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PrimaryColor, StatusBarColor } from './src/assets/colors';
import AppContainer from './src/navigator';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'

const App = () => {
  // const insets = useSafeAreaInsets()
  // const iPhoneXStatusbarHeight = Platform.select({
  //   ios: screenHeight >= 800 ? 48 : 24,
  //   android: StatusBar.currentHeight
  // })
  const _renderStatusBar = () => {
    // if (IS_IOS) return <StatusBarHolder />;
    return <StatusBar backgroundColor={StatusBarColor} barStyle="light-content" />;
  };
  return (
    <SafeAreaProvider>
      <View style={styles.header} >
        {_renderStatusBar()}
        <NavigationContainer>
          <AppContainer />
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: PrimaryColor,
    // position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // padding: 10,
    // height: 60,
    // ...ifIphoneX({
    //   paddingTop: 50
    // }, {
    //   paddingTop: 20
    // }),
    paddingTop: getStatusBarHeight()+10,
    marginBottom: getBottomSpace()
  },
});

export default App;

// import * as React from 'react';
// import { StatusBar, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { SafeAreaProvider, useSafeArea } from 'react-native-safe-area-context';
// import { PrimaryColor } from './src/assets/colors';

// function Demo() {
//   const insets = useSafeArea();
//   return (
//     <View
//       style={{
//         paddingTop: insets.top,
//         paddingBottom: insets.bottom,
//         flex: 1,
//         justifyContent: 'space-between',
//         alignItems: 'center',
//       }}
//     >
//       <Text>This is top text.</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <StatusBar backgroundColor={PrimaryColor} />
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen name="Home">
//             {() => (
//               <Tab.Navigator
//                 initialRouteName="Analitics"
//                 tabBar={() => null}
//               >
//                 <Tab.Screen name="Analitics" component={Demo} />
//                 <Tab.Screen name="Profile" component={Demo} />
//               </Tab.Navigator>
//             )}
//           </Stack.Screen>
//           <Stack.Screen name="Settings" component={Demo} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

