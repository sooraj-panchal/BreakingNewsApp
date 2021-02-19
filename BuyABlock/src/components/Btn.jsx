import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native"
import { PrimaryColor } from '../assets/colors';
// import { vs } from '../utils/globals';
import { mpStyle, vs, hs } from '../utils/styleUtils';
import Label from './Label';
const Btn = ({
    leftIcon,
    rightIcon,
    btnHeight,
    btnContainerStyle,
    leftIconWidth,
    leftIconHeight,
    RightIconWidth,
    RightIconHeight,
    mpBtnContainer,
    label,
    labelSize,
    onPressBtn,
    labelStyle,
    ...props
}) => {
    const styles = StyleSheet.create({
        btnContainerStyle: {
            height: vs(btnHeight || 50),
            justifyContent: "center",
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: PrimaryColor,
            ...mpStyle(mpBtnContainer),
        },
        leftIconStyle: {
            backgroundColor: "green",
            width: hs(leftIconWidth || 20),
            height: hs(leftIconHeight || 20),
            borderRadius: 10,
            position: "absolute",
            left: hs(10)
        },
        rightIconStyle: {
            backgroundColor: "green",
            width: hs(RightIconWidth || 20),
            height: hs(RightIconHeight || 20),
            borderRadius: 10,
            position: "absolute",
            right: hs(10)
        }
    })

    const leftIconRender = () => {
        if (leftIcon)
            return (
                <View style={styles.leftIconStyle}  >
                </View>
            )
    }
    const rightIconRender = () => {
        if (rightIcon)
            return (
                <View style={styles.rightIconStyle}  >
                </View>
            )
    }
    return (
        <TouchableOpacity             {...props}
            style={[styles.btnContainerStyle, btnContainerStyle]}
            onPress={onPressBtn}
        >
            {leftIconRender()}
            <Label
                labelStyle={[{ color: "white" },labelStyle]}
                labelSize={labelSize || 20}
            >{label}</Label>
            {rightIconRender()}
        </TouchableOpacity>
    )
}
export default Btn