import React, { Component } from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import { DarkBlueColor, GrayColor, LightGrayColor, OrangeColor } from '../../../assets/colors'
import { medium, regular, semiBold } from '../../../assets/fonts/fonts'
import { AuthImages } from '../../../assets/images/map'
import Btn from '../../../components/Btn'
import Img from '../../../components/Img'
import Label from '../../../components/Label'
import MainContainer from '../../../components/MainContainer'
import TextInputComp from '../../../components/TextInputComp'

function LoginScreen({
    navigation,
    route
}) {
    // StatusBar.setHidden(true)   
    return (
        <MainContainer style={{
            // backgroundColor:GrayColor
        }} >
            <ScrollView>
                <Img
                    imgSrc={AuthImages.background_logo}
                    width={110}
                    height={110}
                    mpImage={{ mr: 10, mt: 30}}
                    imgStyle={{
                        alignSelf: "flex-end"
                    }}
                />
                <Label
                    labelSize={45}
                    mpLabelStyle={{ pl: 10}}
                    labelStyle={{
                        fontFamily:semiBold
                    }}
                >Login</Label>
                <TextInputComp
                    mpInputContainer={{ mt: 30, mh: 20 }}
                    mpInput={{ pl: 10 }}
                    inputHeight={60}
                    placeholder="E-mail"
                    inputContainerStyle={{
                        backgroundColor: "white",
                        borderColor: LightGrayColor,
                        borderRadius: 15
                    }}
                    placeholderTextColor={GrayColor}
                />
                <TextInputComp
                    mpInputContainer={{ mt: 20, mh: 20 }}
                    mpInput={{ pl: 10 }}
                    inputHeight={60}
                    placeholder="password"
                    inputContainerStyle={{
                        backgroundColor: "white",
                        borderColor: LightGrayColor,
                        borderRadius: 15
                    }}
                    placeholderTextColor={GrayColor}
                />
                <Label
                    labelSize={20}
                    mpLabelStyle={{ mr: 20, mt: 15 }}
                    labelStyle={{ textAlign: "right", color: "grey",fontFamily:medium }}
                >Forgot Password?</Label>
                <Btn
                    label="Login"
                    mpBtnContainer={{ mh: 20, mt: 40 }}
                    btnContainerStyle={{ borderRadius: 30,backgroundColor:DarkBlueColor }}
                    btnHeight={65}
                    labelSize={25}
                    labelStyle={{fontFamily:medium}}
                // labelSize={30}
                />
                <View style={{
                    flex: 1,
                    // height: 20,
                    flexDirection: "row",
                    alignSelf: "center",
                    marginTop: 40,
                    alignItems: "center",
                }} >
                    <View style={{
                        flex: 0.4,
                        height: 1,
                        backgroundColor: "grey"
                    }} />
                    <Label
                        mpLabelStyle={{ ph: 10 ,fontFamily:medium}}
                        labelSize={20}
                    >Or login with</Label>
                    <View style={{
                        flex: 0.4,
                        height: 1,
                        backgroundColor: "grey"
                    }} />
                </View>
                <View style={{
                    flexDirection: "row",
                    // alignSelf:"center",
                    justifyContent: "space-evenly",
                    marginTop: 40,
                    paddingHorizontal: 50,
                }} >
                    <View style={{
                        width: 65,
                        height: 65,
                        elevation: 2,
                        borderRadius: 40,
                        shadowOffset: { width: 2, height: 2 },
                        shadowRadius:2,
                        shadowOpacity: 0.3,
                        backgroundColor: "white"
                    }} >
                    </View>
                    <View style={{
                        width: 65,
                        height: 65,
                        elevation: 2,
                        borderRadius: 40,
                        shadowOffset: { width: 2, height: 2 },
                        shadowRadius:2,
                        shadowOpacity: 0.3,
                        backgroundColor: "white"
                    }} >
                    </View>
                    <View style={{
                        width: 65,
                        height: 65,
                        elevation: 2,
                        borderRadius: 40,
                        shadowOffset: { width: 2, height: 2 },
                        shadowRadius:2,
                        shadowOpacity: 0.3,
                        backgroundColor: "white"
                    }} >
                    </View>
                </View>
                <Label
                    mpLabelStyle={{ ph: 10, mt: 30 }}
                    labelSize={25}
                    labelStyle={{ textAlign: "center",fontFamily:medium }}
                >Don't have an account?</Label>
                <Label
                    mpLabelStyle={{ ph: 10, pt: 10 }}
                    labelSize={25}
                    labelStyle={{ textAlign: "center", color:OrangeColor,fontFamily:semiBold }}
                >Register Now</Label>
            </ScrollView>
        </MainContainer>
    )
}
export default LoginScreen