import { StyleSheet } from "react-native";
import { hs, screenWidth, vs } from "../../../utils/styleUtils";

export const styles = StyleSheet.create({
    imageStyle: {
        width: screenWidth * 0.95,
        height: vs(200),
        resizeMode: "contain",
        backgroundColor: "#f2f2f2"
    },
    rightShareContainer: {
        width: hs(65),
        height: vs(100),
        position: "absolute",
        right: -5,
        borderRadius: 0,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        elevation: 4,
        paddingRight: 5,
        bottom: vs(40),
        justifyContent: "space-between",
        paddingVertical: vs(10),
        alignItems: "center",
        backgroundColor: "#fff",
        shadowOpacity: 0.2,
        shadowOffset: { width: 1, height: 1 }
    }
})