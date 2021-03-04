import React from 'react';
import { StyleSheet, View, TextInput } from "react-native"
import { mpStyle, vs, hs } from '../utils/styleUtils';
import Label from './Label';
import Icon from 'react-native-vector-icons/AntDesign'

const TextInputComp = ({
    inputHeight,
    mpInputContainer,
    mpInput,
    leftIconWidth,
    leftIconHeight,
    RightIconWidth,
    RightIconHeight,
    inputStyle,
    inputContainerStyle,
    leftIcon,
    rightIcon,
    touched,
    errors,
    ...props
}) => {
    const styles = StyleSheet.create({
        inputContainerStyle: {
            height: vs(inputHeight || 50),
            justifyContent: "flex-start",
            borderColor: "grey",
            borderWidth: 1,
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            ...mpStyle(mpInputContainer)
        },
        inputStyle: {
            fontSize: hs(18),
            width: "85%",
            ...mpStyle(mpInput)
        },
        leftIconStyle: {
            backgroundColor: "green",
            width: hs(leftIconWidth || 20),
            height: hs(leftIconHeight || 20),
            borderRadius: 10,
            marginHorizontal: hs(10),
        },
        rightIconStyle: {
            backgroundColor: "green",
            width: hs(RightIconWidth || 20),
            height: hs(RightIconHeight || 20),
            borderRadius: 10,
            position: "absolute",
            right: hs(10)
        },
        errorView: {
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 25,
            marginTop:4
        },
        errorText: {
            fontSize:12,
            color: "red",
            paddingLeft:5
        }
    })
    return (
        <>
            <View style={[styles.inputContainerStyle, inputContainerStyle]} >
                {leftIcon && leftIcon()}
                <TextInput
                    {...props} 
                    style={[styles.inputStyle, inputStyle]}
                />
                {rightIcon && rightIcon()}
            </View>
            {touched && errors &&
                <View style={styles.errorView} >
                    <Icon
                        color="red"
                        name="exclamationcircle" size={12}
                    />
                    <Label
                        labelStyle={styles.errorText}
                    >{errors}</Label>
                </View>
            }
        </>
    )
}
export default TextInputComp