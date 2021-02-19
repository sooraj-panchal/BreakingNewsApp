import { Dimensions, Platform} from "react-native";

export const appName = 'BuyABlock'
export const isInternetConnected = true;
export const fcmToken = '';
// export const mainUrl = 'https://ragingdeveloper.com/api/api.php?apicall='
export const mainUrl = "http://chessmafia.com/php/GroceryStore/api/"
// http://chopmarket.ca/api/

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

export const iPhoneX =
  Platform.OS === "ios" &&
  Dimensions.get("window").height === 812 &&
  Dimensions.get("window").width === 375;