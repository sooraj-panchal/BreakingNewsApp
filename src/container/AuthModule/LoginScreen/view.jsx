import React, { useEffect, Fragment } from 'react'
import { ScrollView, StatusBar } from 'react-native'
import { PrimaryColor, LightGrayColor, GrayColor } from '../../../assets/colors'
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
        loginWatcher(data)
    }
    useEffect(() => {
        if (loginResponse) {
            console.log(loginResponse)
            if (loginResponse.success) {
                navigation.navigate("Verification", {
                    phoneNumber: loginResponse.success.mobile_no
                })
                // navigation.dispatch(AppStack)
                // asyncUserDataWatcher({ ...loginResponse?.data })
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
        >
            <StatusBar backgroundColor={PrimaryColor} />
            <ScrollView>
                <Formik
                    initialValues={{ email: '', phoneNumber: "" }}
                    onSubmit={values => loginHandler(values)}
                    validationSchema={yup.object().shape({
                        // email: yup
                        //     .string()
                        //     .email()
                        //     .required("Email is must be required"),
                        // password: yup
                        //     .string()
                        //     .min(6)
                        //     .required("Password is must be required"),
                        phoneNumber: yup
                            .string()
                            .min(10)
                            .max(20)
                            .required('Mobile No is required field')
                    })}
                >
                    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                        <Fragment>

                            <Container
                                height={300}
                                containerStyle={{
                                    backgroundColor: PrimaryColor,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <Img
                                    imgSrc={AuthImages.loginBg_Image}
                                    // width={100}
                                    // height={100}
                                    imgStyle={{
                                        width: "50%",
                                        height: "60%",
                                        resizeMode: "contain"
                                    }}
                                // mpImage={{ mr: 10 }}
                                />
                            </Container>
                            <Btn
                                label="Select Country"
                                btnContainerStyle={{
                                    borderWidth: 1,
                                    backgroundColor: "white",
                                    borderColor: LightGrayColor,
                                    // justifyContent:"center"
                                }}
                                labelStyle={{
                                    color: GrayColor
                                }}
                                mpBtnContainer={{ mt: 20, mh: 20, pl: 20 }}
                                rightIcon={() => {
                                    return (
                                        <Ionicans
                                            name="ios-chevron-down"
                                            size={25}
                                            style={{
                                                position: "absolute",
                                                right: 10
                                            }}
                                        // color={GrayColor}
                                        />
                                    )
                                }}
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
                                placeholder="Your Phone Number"
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
                                        // color={GrayColor}
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
                <Label labelStyle={{
                    textAlign: "center",
                    alignSelf: "center",
                    width: "80%",
                }} mpLabelStyle={{ pt: 40 }} labelSize={18} >We will send you a One time SMS message</Label>
            </ScrollView>
        </MainContainer>
    )
}
export default LoginScreen