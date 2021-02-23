import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, StyleSheet, View, StatusBar } from 'react-native'
import { PrimaryColor, OrangeColor } from '../../../assets/colors'
import { medium, regular, semiBold } from '../../../assets/fonts/fonts'
import { AuthImages } from '../../../assets/images/map'
import Btn from '../../../components/Btn'
import Img from '../../../components/Img'
import Label from '../../../components/Label'
import MainContainer from '../../../components/MainContainer'
import {
    CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell,
} from 'react-native-confirmation-code-field'
import Header from '../../../components/Header'
import * as globals from '../../../utils/globals'
import { AppStack } from '../../../navigator/navActions'
import AsyncStorage from '@react-native-async-storage/async-storage'

function VerificationScreen({
    navigation,
    route,
    verifyOtpLoading,
    verifyOtpResponse,
    verifyOtpWatcher,
    asyncUserDataWatcher,
    verifyOtpSuccess
}) {
    const CELL_COUNT = 4;

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const verifyOtpHandler = () => {
        // navigation.navigate("Profile")
        let data = new FormData()
        data.append("mobile_no", route.params.phoneNumber)
        data.append("otp", value)
        // loginWatcher(data)
        verifyOtpWatcher(data)
    }

    useEffect(() => {
        console.log(verifyOtpResponse)
        if (verifyOtpResponse?.success) {
            // globals.authToken = verifyOtpResponse.success.token
            console.log("otpsdadsadsdsdas", verifyOtpResponse.success)
            navigation.dispatch(AppStack)
            asyncUserDataWatcher(verifyOtpResponse.success)
            AsyncStorage.setItem("userData", JSON.stringify(verifyOtpResponse.success))
        }
        return () => verifyOtpSuccess(null)
    }, [verifyOtpResponse])

    return (
        <MainContainer statusBarBg="#f2f2f2" modalLoader
            absoluteLoading={verifyOtpLoading}
        >
            <StatusBar backgroundColor="#f2f2f2" barStyle="dark-content" />
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} >
                <Header navigation={navigation} />
                {/* <Img
                    imgSrc={AuthImages.background_logo}
                    width={90}
                    height={90}
                    imgStyle={{
                        alignSelf: "flex-end",
                        top: 20,
                        right: 10,
                        position: "absolute"
                    }}
                /> */}
                <Label
                    labelSize={35}
                    mpLabelStyle={{ ml: 20, mt: 10 }}
                    labelStyle={{
                        fontFamily: semiBold,
                    }}
                >Confirm number</Label>
                <Label
                    labelSize={17}
                    mpLabelStyle={{ mt: 10, mh: 20 }}
                    labelStyle={{
                        fontFamily: regular
                    }}
                >we'll sent an SMS with 4-digit code to
                 </Label>
                <Label labelStyle={{ color: PrimaryColor }} labelSize={18} mpLabelStyle={{ pl: 20 }} >
                    {route.params?.phoneNumber}</Label>
                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />
                <Btn
                    label="Confirm"
                    mpBtnContainer={{ mh: 20, mt: 60 }}
                    btnContainerStyle={{
                        borderRadius: 30,
                        backgroundColor: PrimaryColor,
                        justifyContent: "center"
                    }}
                    btnHeight={55}
                    labelSize={20}
                    labelStyle={{ fontFamily: medium }}
                    onPressBtn={verifyOtpHandler}
                />
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    alignSelf: "center",
                    marginTop: 20
                }} >
                    <Label labelSize={20}
                        labelStyle={{ alignSelf: "center" }}
                    >Don't get code?</Label>
                    <Label
                        labelStyle={{ color: PrimaryColor }} mpLabelStyle={{ ml: 10 }}
                        labelSize={20}
                        onPressLabel={() => {
                            navigation.navigate("ResetPassword")
                        }}>Resend</Label>
                </View>
            </ScrollView>
        </MainContainer>
    )
}
const styles = StyleSheet.create({
    codeFieldRoot: {
        marginTop: 30,
        width: "70%",
        alignSelf: "center",
    },
    cell: {
        width: 50,
        height: 50,
        lineHeight: 45,
        fontSize: 24,
        // borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 1,
        shadowOffset: { width: 1, height: 1 },
        // shadowRadius:0.1,
        shadowOpacity: 0.5,
        // borderColor: '#00000030',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: "center"
    },
    focusCell: {
        borderColor: '#000',
    },
});

export default VerificationScreen