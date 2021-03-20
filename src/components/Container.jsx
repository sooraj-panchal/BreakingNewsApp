import React from 'react';
import { StyleSheet, View, TouchableOpacity } from "react-native"
import { vs, mpStyle, hs } from '../utils/styleUtils';

const Container = ({
    onPressCard,
    containerStyle,
    children,
    height,
    mpContainer,
    width
}) => {
    const styles = StyleSheet.create({
        containerStyle: {
            height: height ? vs(height):null,
            width: width ? hs(width) : null,
            ...mpStyle(mpContainer)
        }
    })

    if (onPressCard) {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={onPressCard}
                style={[styles.containerStyle, containerStyle]}
            >
                {children}
            </TouchableOpacity>
        )
    }
    return (
        <View style={[styles.containerStyle, containerStyle]} >
            {children}
        </View>
    )
}

export default Container