import messaging from '@react-native-firebase/messaging';
import * as globals from './globals'
// function netInfoStatus() {
//     NetInfo.addEventListener(state => {
//       console.log("Connection type", state.type);
//       console.log("Is connected?", state.isConnected);
//       globals.isInternetConnected = state.isConnected;
//     });
//   }
import * as React from 'react';


export const NotificationHandler = () => {
    checkPermission()
    createNotificationListeners()
    // netInfoStatus()
}


function createNotificationListeners(navigation) {
    // PushNotification.configure({
    //     onNotification: function (notification) {
    //         console.log("NOTIFICATION:", notification);
    //         if (notification.userInteraction) {
    //             navigate("Wallet")
    //         }
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

    // messaging().onNotificationOpenedApp(remoteMessage => {
    //     console.log(
    //         'Notification caused app to open from background state:',
    //         remoteMessage.notification,
    //     );
    //     // const { data } = remoteMessage;
    //     const url = "myNotification://NewsDetail"
    //     // const url = `${prefix}${data.path}/${data.id}`;
    
    //     if (remoteMessage) {
    //         Linking.openURL(url).catch(err => console.error(err));
    //         // firebase.messaging().setBadgeNumber(0);
    //     }
    //     // navigate("NewsDetail");
    //     // navigate(remoteMessage.data.type);
    // });

    // // Check whether an initial notification is available
    // messaging()
    //     .getInitialNotification()
    //     .then(remoteMessage => {
    //         if (remoteMessage) {
    //             console.log(
    //                 'Notification caused app to open from quit state:',
    //                 remoteMessage.notification,
    //             );
    //             // setTimeout(() => {
    //             //     navigate("NewsDetail");
    //             // }, 100);
    //         }
    //     });

}
async function checkPermission() {
    const enabled = await messaging().hasPermission();
    if (enabled) {
        getToken();
    } else {
        requestPermission();
    }
}
async function getToken() {
    let fcmToken = await messaging().getToken();
    globals.fcmToken = fcmToken
    console.log('Fcm Token --->', fcmToken);
}
async function requestPermission() {
    try {
        await messaging().requestPermission();
        getToken();
    } catch (error) {
        console.log('permission rejected');
    }
}

