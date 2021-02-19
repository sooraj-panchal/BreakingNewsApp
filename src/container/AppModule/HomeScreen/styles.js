import { StyleSheet } from "react-native";
import { PrimaryColor } from "../../../assets/colors";
import { medium, semiBold } from "../../../assets/fonts/fonts";

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: PrimaryColor
    },
    headerTopContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerLeftContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerRightContainer:{
        borderRadius:4,
        backgroundColor:"white",
    },
    headerRightlabelStyle:{
        color:"black"
    },
    headerLabel: {
        fontFamily:semiBold,
        color:"black",
        fontWeight:"bold"
    },
    searchContainer: {
        backgroundColor: PrimaryColor,
        justifyContent: "center",
    },
    searchBtn: {
        backgroundColor: "white",
        alignItems:"center",
        borderRadius: 30,
        borderWidth: 0
    },
    searchBtnLabel: {
        color: "black",
        opacity:0.3,
        paddingLeft: 10,
        // paddingTop: 3,
        letterSpacing:0.2,
        
    },
    propertyTypeLabelContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        paddingTop: 15,
        paddingHorizontal: 15
    },
    propertyTypeContainer: {
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#e3e3e3",
        elevation: 0,
        overflow: "hidden"
    },
    propertyTypeImage: {

    },
    propertyNameContainer: {
        height: 40,
        justifyContent: "center"
    },
    propertyTypeListContainer: {
        marginHorizontal: 15,
        marginTop: 10,
    },
    propertyForYouButton: {
        // width: 100,
        backgroundColor:PrimaryColor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:20,
        borderWidth:0
    }
})
export default styles