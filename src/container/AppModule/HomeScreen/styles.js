import { Platform, StyleSheet } from "react-native";
import { screenWidth } from "../../../utils/styleUtils";
const styles = StyleSheet.create({
    item: {
        width: screenWidth * 0.92,
        height: screenWidth * 0.60,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }),
        backgroundColor: '#f7f7f7',
        borderRadius: 8,
        elevation: 1,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'contain',
    },
});

export default styles