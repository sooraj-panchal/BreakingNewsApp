import messaging from '@react-native-firebase/messaging';
import * as globals from './globals'
import PushNotification from 'react-native-push-notification';
import { navigate } from './../../NavigationHandler';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { not } from 'react-native-reanimated';
import { Platform } from 'react-native';

export const NotificationHandler = () => {
  checkPermission()
  createNotificationListeners()
  if (Platform.OS === "ios") iosPushNotification()
}
const onRemoteNotification = (notification) => {
  const isClicked = notification.getData().userInteraction === 1;
  console.log("from Push", notification)

  if (isClicked) {
    // Navigate user to another screen
  } else {
    // Do something else with push notification
  }

};

function iosPushNotification() {
  PushNotificationIOS.addEventListener('notification', onRemoteNotification);
}

function createNotificationListeners() {
  PushNotification.configure({
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
      const { foreground, userInteraction, title, message } = notification;
      if (foreground && (title || message) && !userInteraction) PushNotification.localNotification(notification);
      if (Platform.OS == "ios") {
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      }

      if (userInteraction) {
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

