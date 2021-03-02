import React from 'react'
import { StatusBar } from 'react-native'
import { redColor, StatusBarColor } from '../../../assets/colors'
import { AuthImages } from '../../../assets/images/map'
import Img from '../../../components/Img'
import Label from '../../../components/Label'
import MainContainer from '../../../components/MainContainer'
import { screenHeight, screenWidth } from '../../../utils/styleUtils'

function SplashScreen({

}) {
    return (
        <MainContainer style={{
            // backgroundColor: redColor,
            justifyContent: "center",
            alignItems: "center"
        }} >
            {/* <StatusBar backgroundColor={StatusBarColor}/> */}
            {/* <Image
                source={AuthImages.splashLogo_image}
                // width="100%"
                // height="100%"
                style={{
                    width: "100%",
                    height: "100%"
                }}
            /> */}
            <Img
                imgSrc={AuthImages.splashBg_image}
                imgStyle={{
                    width: screenWidth,
                    height: screenHeight
                }}
                fadeDuration={0}

            />
            <Img
                imgSrc={AuthImages.splashLogo_image}
                imgStyle={{
                    width: "90%",
                    height: 70,
                    position: "absolute",
                    resizeMode: "contain"
                }}
            />
        </MainContainer>
    )
}

export default SplashScreen