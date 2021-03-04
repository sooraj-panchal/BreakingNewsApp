import React, { useEffect } from "react";
import { View, FlatList, Dimensions, StatusBar, ScrollView, Linking } from 'react-native'
import { headerImageArray } from "../../../../dummyArray";
import Img from "../../../components/Img";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import { screenHeight, screenWidth } from "../../../utils/styleUtils";
import HTML from "react-native-render-html";
import { AppImages } from "../../../assets/images/map";

const HEADER_HEIGHT = 60;
const IMAGE_HEIGHT = 240;
// const CONTACT_PADDING = 10


const HeaderImagesList = ({
    imgSrc,
    imageTitle,
    imagePath,
    image
}) => {
    return (
        <>
            <Img
                imgSrc={{ uri: imagePath + image }}
                // width={300}
                // height={300}
                imgStyle={{
                    width: screenWidth * 0.95,
                    height: 200,
                    resizeMode: "contain",
                    // borderRadius: 5,
                    // borderWidth:0,
                    backgroundColor: "#f2f2f2"
                    // alignSelf:"center"
                }}
                mpImage={{ mt: 10 }}
            />
        </>
    )
}

function NewsDetailScreen({
    navigation,
    route,
    getArticleDetailsWatcher,
    getArticleDetailsLoading,
    getArticleDetailsResponse,
    updateNotificationWatcher
}) {
    const { article_Id } = route.params
    // alert(route.params.article_Id)

    useEffect(() => {
        getArticleDetailsWatcher({
            article_id: article_Id
        })
        return () => {
            if (route.params?.notification_Id) {
                let data = new FormData()
                data.append("notification_id", route.params?.notification_Id)
                updateNotificationWatcher(data)
            }
        }
    }, [])
    return (
        <MainContainer
            style={{ backgroundColor: "white" }}
            loading={getArticleDetailsLoading}
        >
            {/* <StatusBar translucent backgroundColor="red"/> */}
            <ScrollView
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <View style={{
                    zIndex: 100,
                    position: "absolute",
                    flexDirection: "row",
                    width: "100%",
                    height: HEADER_HEIGHT,
                    alignItems: "center",
                }} >
                </View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={[0]}
                    renderItem={({ item, index }) => {
                        return <HeaderImagesList
                            image={getArticleDetailsResponse?.data[0]?.image}
                            imagePath={getArticleDetailsResponse?.path}
                        />
                    }}
                    keyExtractor={(_, index) => index.toString()}
                    scrollEnabled={false}
                    pagingEnabled
                    horizontal={true}
                    ListHeaderComponent={() => (<View style={{ marginRight: 10 }} />)}
                    ItemSeparatorComponent={() => (<View style={{ marginLeft: 10 }} />)}
                    ListFooterComponent={() => (<View style={{ marginRight: 40 }} />)}
                />
                <Label labelStyle={{
                    color: "black",
                    fontWeight: "bold"
                }} labelSize={18} mpLabelStyle={{ pl: 20, pt: 20, pr: 10 }}>
                    {getArticleDetailsResponse?.data[0]?.title}</Label>
                <HTML
                    source={{ html: getArticleDetailsResponse?.data[0]?.description }}
                    contentWidth={screenWidth}
                    containerStyle={{ marginHorizontal: 20 }}
                    baseFontStyle={{
                        fontSize: 16,
                    }}
                />
            </ScrollView>
            {/* <Animated.View style={{
                height: CONTACT_HEIGHT,
                // paddingVertical:CONTACT_PADDING,
                backgroundColor: "white",
                justifyContent: "center",
                position: "absolute",
                right: 0, bottom: 0, left: 0,
                transform: [{ translateY: ContactY }]
            }} >
                <Btn
                    label="Contact"
                    labelSize={20}
                    btnContainerStyle={{
                        backgroundColor: PrimaryColor,
                        borderRadius: 40,
                        justifyContent: "center",
                    }}
                    mpBtnContainer={{ mh: 20 }}
                />
            </Animated.View> */}
            <Img
                withContainer
                containerStyle={{
                    position: "absolute",
                    right: -5,
                    borderRadius: 0,
                    borderTopLeftRadius: 40,
                    borderBottomLeftRadius: 40,
                    bottom: 40,
                    width: 60,
                    height: 50,
                    elevation: 5,
                    paddingRight: 5,
                    // elevation:0.5,
                    // borderWidth:1,
                    // borderColor:"#f8f8f8"
                    // backgroundColor: "#f2f2f2"
                    // top:-20,
                    // zIndex: 100
                }}

                imgSrc={AppImages.whatsAppImage}
                width={40}
                height={40}
                onPress={() => {
                    let url =
                        "whatsapp://send?text=" +
                        "" +
                        "&phone=41" +
                        791248202;
                    Linking.openURL(url)
                        .then(data => {
                            console.log("WhatsApp Opened successfully " + data);
                        })
                        .catch(() => {
                            alert("Make sure WhatsApp installed on your device");
                        });
                    // navigation.push("ChatDetail")
                }}
            />
        </MainContainer>
    )
}
export default NewsDetailScreen
