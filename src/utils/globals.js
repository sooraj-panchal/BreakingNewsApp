import { Dimensions, Platform, StatusBar } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export function getStatusBarHeight() {
  const insets = useSafeAreaInsets()
  return Platform.OS == "android" ? StatusBar.currentHeight : insets.top
}
export const appName = 'BuyABlock'
// export const mainUrl = "https://chessmafia.com/php/BreakingNews/api/"
export const mainUrl = "http://app.worldmetalcontact.com/api/"

export const isInternetConnected = true;
export const fcmToken = '';
export const authToken = ""
export const toastMessage = ""
export const buyer_id = ""
export const user_id = ""
export const imagePath = "http://app.worldmetalcontact.com/public/uploads/"


export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

export const iPhoneX =
  Platform.OS === "ios" &&
  Dimensions.get("window").height === 812 &&
  Dimensions.get("window").width === 375;


export const registerUser = 'register'
export const otp_verify = 'otpVerify'
export const loginUser = 'login'
export const forgotPassword = 'forgotPassword'
export const Resetpassword = 'Resetpassword'
export const chatData = 'chatData'
export const sendMessage = 'sendData'
export const articleData = 'articleData'
export const articleDetail = 'articleDetail'
export const notificationList = 'notificationList'
export const notificationSeen = 'notificationSeen'
export const trendingArticle = 'trendingArticle'
export const articleSeen = 'articleSeen'


