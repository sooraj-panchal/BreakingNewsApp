import React, { useEffect, Fragment } from 'react'
import { ScrollView, StatusBar, KeyboardAvoidingView } from 'react-native'
import { PrimaryColor, LightGrayColor, GrayColor, StatusBarColor } from '../../../assets/colors'
import { medium } from '../../../assets/fonts/fonts'
import { AuthImages } from '../../../assets/images/map'
import Btn from '../../../components/Btn'
import Img from '../../../components/Img'
import Label from '../../../components/Label'
import MainContainer from '../../../components/MainContainer'
import TextInputComp from '../../../components/TextInputComp'
import Ionicans from 'react-native-vector-icons/Ionicons'
import { Formik } from 'formik'
import * as yup from 'yup';
import { AppStack } from '../../../navigator/navActions'
import Container from '../../../components/Container'
import { screenHeight, screenWidth } from '../../../utils/styleUtils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as globals from '../../../utils/globals'
function LoginScreen({
    navigation,
    route,
    loginWatcher,
    loginSuccess,
    loginResponse,
    loginLoading,
    asyncUserDataWatcher
}) {
    const loginHandler = (values) => {

        // alert("hello")
        let data = new FormData()
        data.append("mobile_no", values.phoneNumber)
        data.append("user_name", values.userName)
        data.append("fcm_token", globals.fcmToken)
        loginWatcher(data)
    }
    useEffect(() => {
        if (loginResponse) {
            console.log(loginResponse)
            if (loginResponse.status == "success") {
                navigation.dispatch(AppStack)
                globals.authToken = loginResponse?.data?.token
                globals.user_id = loginResponse?.data?.user_id
                AsyncStorage.setItem("userData", JSON.stringify(loginResponse?.data))
            }
        }
        return () => {
            loginSuccess(null)
        }
    }, [loginResponse])
    return (
        <MainContainer
            statusBarBg="#f2f2f2"
            absoluteLoading={loginLoading}
            modalLoader
            style={{
                // paddingTop:StatusBar.currentHeight,
            }}
        >
            {/* <StatusBar backgroundColor={StatusBarColor} /> */}
            <ScrollView  >
                <Formik
                    initialValues={{ userName: "", email: '', phoneNumber: "" }}
                    onSubmit={values => loginHandler(values)}
                    validationSchema={yup.object().shape({
                        userName: yup
                            .string()
                            .min(2, "Name must be at least 2 characetrs")
                            .required('Name is required field'),
                        phoneNumber: yup
                            .string()
                            .min(8, "Mobile no must be at least 8 numbers")
                            .max(12)
                            .required('Mobile no is required field')
                    })}
                >
                    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                        <Fragment>
                            <Container
                                // height={300}
                                containerStyle={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: '#3F1314',
                                    // paddingTop: StatusBar.currentHeight
                                }}
                            >
                                <Img
                                    imgSrc={AuthImages.splashBg_image}
                                    imgStyle={{
                                        width: screenWidth,
                                        height: screenHeight / 2,
                                        resizeMode: "stretch"
                                    }}
                                />
                                <Img
                                    imgSrc={AuthImages.splashLogo_image}
                                    imgStyle={{
                                        width: "90%",
                                        height: 70,
                                        position: "absolute",
                                        resizeMode: "contain"
                                    }}
                                    fadeDuration={0}
                                />
                            </Container>
                            <TextInputComp
                                value={values.userName}
                                onChangeText={handleChange('userName')}
                                onBlur={() => setFieldTouched('userName')}
                                touched={touched.userName}
                                errors={errors.userName}
                                mpInputContainer={{ mt: 20, mh: 20 }}
                                inputHeight={55}
                                placeholder="Name"
                                inputContainerStyle={{
                                    backgroundColor: "white",
                                    borderColor: LightGrayColor,
                                    borderRadius: 10
                                }}
                                inputStyle={{
                                    width: "70%",
                                }}
                                leftIcon={() => {
                                    return (
                                        <Ionicans
                                            name="md-person"
                                            size={25}
                                            style={{
                                                width: 35,
                                                marginLeft: 15,
                                            }}
                                            color={PrimaryColor}
                                        />
                                    )
                                }}
                                placeholderTextColor={GrayColor}
                            />
                            <TextInputComp
                                value={values.phoneNumber}
                                onChangeText={handleChange('phoneNumber')}
                                onBlur={() => setFieldTouched('phoneNumber')}
                                autoCompleteType="tel"
                                maxLength={12}
                                keyboardType="number-pad"
                                touched={touched.phoneNumber}
                                errors={errors.phoneNumber}
                                mpInputContainer={{ mt: 20, mh: 20 }}
                                inputHeight={55}
                                placeholder="Phone"
                                inputContainerStyle={{
                                    backgroundColor: "white",
                                    borderColor: LightGrayColor,
                                    borderRadius: 10
                                }}
                                inputStyle={{
                                    width: "70%",
                                }}
                                leftIcon={() => {
                                    return (
                                        <Ionicans
                                            name="call"
                                            size={25}
                                            style={{
                                                width: 35,
                                                marginLeft: 15,
                                            }}
                                            color={PrimaryColor}
                                        />
                                    )
                                }}
                                placeholderTextColor={GrayColor}
                            />
                            <Btn
                                label="Continue"
                                mpBtnContainer={{ mh: 20, mt: 20 }}
                                btnContainerStyle={{
                                    borderRadius: 30,
                                    backgroundColor: PrimaryColor,
                                    justifyContent: "center"
                                }}
                                btnHeight={55}
                                labelSize={20}
                                labelStyle={{ fontFamily: medium }}
                                onPressBtn={handleSubmit}
                            />
                        </Fragment>
                    )}
                </Formik>
            </ScrollView>
        </MainContainer>
    )
}
export default LoginScreen