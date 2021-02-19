import React, { useEffect, useState } from 'react'
import { ScrollView, View, TouchableOpacity, Animated, Dimensions, Easing } from 'react-native'
import { PrimaryColor, LightGrayColor, OrangeColor, GrayColor } from '../../../assets/colors'
import { medium, semiBold } from '../../../assets/fonts/fonts'
import { AuthImages } from '../../../assets/images/map'
import Btn from '../../../components/Btn'
import Img from '../../../components/Img'
import Label from '../../../components/Label'
import MainContainer from '../../../components/MainContainer'
import TextInputComp from '../../../components/TextInputComp'
import Ionicans from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import { Formik } from 'formik'
import * as yup from 'yup';
import Header from '../../../components/Header'
import { authToken, fcmToken } from '../../../utils/globals'
import { AppStack } from '../../../navigator/navActions'

function ProfileScreen({
    navigation,
    route,
    registerWatcher,
    registerLoading,
    registerResponse
}) {
    const [profileImages, setProfileImage] = useState("")
    const registerHandler = (values) => {
        navigation.dispatch(AppStack)
        // let data = new FormData()
        // data.append("auth_token", authToken)
        // data.append("name", values.name)
        // data.append("email", values.email)
        // data.append("password", values.password)
        // data.append("mobile_no", values.phoneNumber)
        // data.append("type", "N")
        // data.append("image", profileImages)
        // data.append("device_id", fcmToken)
        // registerWatcher(data)
    }
    useEffect(() => {
        if (registerResponse) {
            console.log(registerResponse)
            if (registerResponse?.status == "success") {
                navigation.navigate("Verification", {
                    otp: registerResponse.data.otp,
                    email: registerResponse.data.email,
                    buyer_id: registerResponse.data.buyer_id,
                    // ...route.params
                })
            }
        }
    }, [registerResponse])

    return (
        <MainContainer
            statusBarBg="#f2f2f2"
            modalLoader
            absoluteLoading={registerLoading}
        >
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} >
                <Formik
                    initialValues={{ email: '',name: ""}}
                    onSubmit={values => registerHandler(values)}
                    validationSchema={yup.object().shape({
                        name: yup
                            .string()
                            .min(5)
                            .required('Name is required field'),
                        email: yup
                            .string()
                            .email()
                            .required("Email is must be required")
                    })}
                >
                    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                        <>
                            <Header navigation={navigation} />
                            {/* <Img
                                imgSrc={AuthImages.background_logo}
                                width={90}
                                height={90}
                                // mpImage={{ mr: 20 }}
                                imgStyle={{
                                    alignSelf: "flex-end",
                                    top: 20,
                                    right: 10,
                                    position: "absolute"
                                }}
                            /> */}
                            <Label
                                labelSize={30}
                                mpLabelStyle={{ pl: 20, mt: 10 }}
                                labelStyle={{
                                    fontFamily: semiBold,
                                    // fontWeight:"800"
                                }}
                            >Complete your Profile</Label>
                            {/* <View style={{
                                alignSelf: "center",
                                alignItems: "center",
                                justifyContent: 'center',
                                marginVertical: 10
                            }} >
                                <Img
                                    imgSrc={{ uri: "https://www.mdblakehurst.catholic.edu.au/wp-content/uploads/sites/39/2019/05/Person-icon.jpg" }}
                                    width={110}
                                    height={110}
                                    imgStyle={{
                                        borderRadius: 60
                                    }}
                                />
                                <Ionicans
                                    name="camera"
                                    size={50}
                                    color="white"
                                    style={{
                                        position: "absolute"
                                    }}
                                />
                            </View> */}
                            <TextInputComp
                                value={values.name}
                                onChangeText={handleChange("name")}
                                onBlur={() => setFieldTouched('name')}
                                autoCompleteType="name"
                                keyboardType="name-phone-pad"
                                touched={touched.name}
                                errors={errors.name}
                                mpInputContainer={{ mt: 20, mh: 20 }}
                                inputHeight={55}
                                placeholder="Your name"
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
                                            name="person-outline"
                                            size={25}
                                            style={{
                                                width: 35,
                                                marginLeft: 15,
                                            }}
                                        />
                                    )
                                }}
                                placeholderTextColor={GrayColor}

                            />
                            <TextInputComp
                                value={values.email}
                                onChangeText={handleChange("email")}
                                onBlur={() => setFieldTouched('email')}
                                autoCompleteType="email"
                                keyboardType="email-address"
                                touched={touched.email}
                                errors={errors.email}
                                mpInputContainer={{ mt: 20, mh: 20 }}
                                inputHeight={55}
                                placeholder="Your E-mail Address"
                                inputContainerStyle={{
                                    backgroundColor: "white",
                                    borderColor: LightGrayColor,
                                    borderRadius: 10,
                                }}
                                leftIcon={() => {
                                    return (
                                        <Octicons
                                            name="mail"
                                            size={25}
                                            style={{
                                                width: 35,
                                                marginLeft: 15,
                                            }}
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
                        </>
                    )}
                </Formik>
            </ScrollView>
        </MainContainer>
    )
}
export default ProfileScreen