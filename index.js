/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

// PushNotification.configure({
//     onNotification: function (notification) {
//         console.log("PUSH NOTIFICATION:", notification);
//         const { foreground, userInteraction, title, message } = notification;
//         if (foreground && (title || message) && !userInteraction) PushNotification.localNotification(notification);
//         notification.finish(PushNotificationIOS.FetchResult.NoData);
//     },

//     onAction: function (notification) {
//         console.log("PUSH ACTION:", notification.action);
//         console.log("PUSH NOTIFICATION_Action:", notification);
//     },

//     onRegistrationError: function (err) {
//         console.error(err.message, err);
//     },
//     permissions: {
//         alert: true,
//         badge: true,
//         sound: true,
//     },
//     popInitialNotification: true,
//     requestPermissions: true,
// });

AppRegistry.registerComponent(appName, () => App);
