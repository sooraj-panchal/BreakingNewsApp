import React from 'react';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { hs, mpStyle, vs } from '../utils/styleUtils';

const Img = ({
    onPress,
    imgStyle,
    height,
    width,
    imgSrc,
    mpImage,
    containerStyle,
    withContainer,
    ...props
}) => {
    const styles = StyleSheet.create({
        imgStyle: {
            width: hs(width || 40),
            height: vs(height || 40),
            ...mpStyle(mpImage)
        },
        containerStyle: {
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            width: 60,
            height: 60,
            elevation: 2,
            borderRadius: 60,
            shadowOffset: { width: 2, height: 2 },
            shadowRadius: 2,
            shadowOpacity: 0.3
        }
    })
    // if (onPressCard) {
    // if (withContainer) return (
    //     <View style={[styles.containerStyle, containerStyle]} >
    //         <Image
    //             {...props}
    //             style={[styles.imgStyle, imgStyle]}
    //             source={imgSrc}
    //         />
    //     </View>
    // )
    if (withContainer) return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={[styles.containerStyle, containerStyle]} >
            <Image
                {...props}
                style={[styles.imgStyle, imgStyle]}
                source={imgSrc}
            />
        </TouchableOpacity>
    )
    return (
        <Pressable onPress={onPress} >
            <Image
                {...props}
                style={[styles.imgStyle, imgStyle]}
                source={imgSrc}
            />
        </Pressable>

    )
}

export default Img