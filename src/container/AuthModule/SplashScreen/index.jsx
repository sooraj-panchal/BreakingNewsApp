import React from 'react'
import { StatusBar } from 'react-native'
import { redColor } from '../../../assets/colors'
import { AuthImages } from '../../../assets/images/map'
import Img from '../../../components/Img'
import Label from '../../../components/Label'
import MainContainer from '../../../components/MainContainer'

function SplashScreen({

}) {
    return (
        <MainContainer style={{
            backgroundColor: redColor,
            justifyContent: "center",
            alignItems: "center"
        }} >
            <StatusBar backgroundColor={redColor} barStyle='light-content' />
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
                imgSrc={AuthImages.splashLogo_image}
                width={200}
                height={200}
            />
            <Label
                labelSize={40}
                labelStyle={{
                    color: "white",
                    fontWeight: "bold",
                    letterSpacing: 2
                }}
                mpLabelStyle={{ mt: 20 }}
            >Breaking News</Label>
        </MainContainer>
    )
}

export default SplashScreen