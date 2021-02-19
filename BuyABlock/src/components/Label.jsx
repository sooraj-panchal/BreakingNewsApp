import React from 'react';
import { StyleSheet, Text } from "react-native"
import { hs, vs,mpStyle } from '../utils/styleUtils';
import {regular} from './../assets/fonts/fonts'
const Label = ({
    onPressCard,
    labelStyle,
    labelSize,
    label,
    mpLabelStyle,
    // mt, ml, mb, mr, pt, pl, pb, pr, m, p, mv, pv, mh, ph,
    children,
    ...props
}) => {
    const styles = StyleSheet.create({
        labelStyle: {
            fontSize: hs(labelSize ? labelSize : 10),
            fontFamily:regular,
            ...mpStyle(mpLabelStyle)
        }
    })
    // if (onPressCard) {
    return (
        <Text  {...props} style={[styles.labelStyle, labelStyle]}> {label ? label : children}</Text>
    )
    // }
}

export default Label