import React from 'react';
import { Pressable, StyleSheet, Text } from "react-native"
import { hs, vs, mpStyle } from '../utils/styleUtils';
import { regular } from './../assets/fonts/fonts'
const Label = ({
    labelStyle,
    labelSize,
    label,
    mpLabelStyle,
    // mt, ml, mb, mr, pt, pl, pb, pr, m, p, mv, pv, mh, ph,
    children,
    onPressLabel,
    ...props
}) => {
    const styles = StyleSheet.create({
        labelStyle: {
            fontSize: hs(labelSize ? labelSize : 10),
            fontFamily: regular,
            ...mpStyle(mpLabelStyle)
        }
    })

    if (onPressLabel) {
        return (
            <Pressable onPress={onPressLabel}>
                <Text  {...props} style={[styles.labelStyle, labelStyle]}>{children}</Text>
            </Pressable>
        )
    }
    return (
        <Text  {...props} style={[styles.labelStyle, labelStyle]}>{children}</Text>
    )
    // }
}

export default Label