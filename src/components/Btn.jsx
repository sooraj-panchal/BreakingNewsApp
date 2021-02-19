import React from 'react';
import { StyleSheet, TouchableOpacity } from "react-native"
import { PrimaryColor } from '../assets/colors';
import { mpStyle, vs, hs } from '../utils/styleUtils';
import Label from './Label';
const Btn = ({
    leftIcon,
    rightIcon,
    btnHeight,
    btnWidth,
    btnContainerStyle,
    mpBtnContainer,
    label,
    labelSize,
    onPressBtn,
    labelStyle,
    activeOpacity = 0.8,
    ...props
}) => {
    const styles = StyleSheet.create({
        btnContainerStyle: {
            height: vs(btnHeight || 50),
            width: btnWidth ? hs(btnWidth || 50) : null,
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: PrimaryColor,
            ...mpStyle(mpBtnContainer),
        }
    })
    return (
        <TouchableOpacity {...props}
            style={[styles.btnContainerStyle, btnContainerStyle]}
            onPress={onPressBtn}
            activeOpacity={activeOpacity}
        >
            {leftIcon && leftIcon()}
            <Label
                labelStyle={[{ color: "white" }, labelStyle]}
                labelSize={labelSize || 20}
            >{label}</Label>
            {rightIcon && rightIcon()}
        </TouchableOpacity>
    )
}
export default Btn