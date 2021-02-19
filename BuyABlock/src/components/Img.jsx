import React from 'react';
import { Image, StyleSheet, Text } from "react-native"
import { hs, mpStyle, vs } from '../utils/styleUtils';

const Img = ({
    onPressCard,
    imgStyle,
    height,
    width,
    imgSrc,
    mpImage,
    ...props
}) => {
    const styles = StyleSheet.create({
        imgStyle: {
            width: hs(width || 40),
            height: vs(height || 40),
            ...mpStyle(mpImage)
        }
    })
    // if (onPressCard) {
    return (
        <Image
            {...props}
            style={[styles.imgStyle, imgStyle]}
            source={imgSrc}
        />
    )
}

export default Img