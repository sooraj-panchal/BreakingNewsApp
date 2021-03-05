import messaging from '@react-native-firebase/messaging';
import * as globals from './globals'
import PushNotification from 'react-native-push-notification';
import { navigate } from './../../NavigationHandler';

export const NotificationHandler = () => {
    checkPermission()
    createNotificationListeners()
}

function createNotificationListeners() {
    PushNotification.configure({
        onNotification: function (notification) {
            console.log("NOTIFICATION:", notification);
            if (notification.userInteraction) {
                const { message } = notification.data
                let parsedMessage = JSON.parse(message);
               navigate("NewsDetail", {
                    article_Id: parsedMessage.article_id
                })
            }
        },
        onRegistrationError: function (err) {
            console.error(err.message, err);
        },
        permissions: {
            alert: true,
            badge: true,
            sound: true,
        },
        popInitialNotification: true,
        requestPermissions: true,
    });
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

