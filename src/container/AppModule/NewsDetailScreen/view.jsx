import React, { useEffect } from "react";
import { View, FlatList, Dimensions, StatusBar, ScrollView, Linking, Platform } from 'react-native'
import { headerImageArray } from "../../../../dummyArray";
import Img from "../../../components/Img";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import { screenHeight, screenWidth } from "../../../utils/styleUtils";
import HTML from "react-native-render-html";
import { AppImages } from "../../../assets/images/map";
import Ionicons from "react-native-vector-icons/Ionicons";
import Share from 'react-native-share';

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

    const onShare = async () => {
        //     try {
        //       const result = await Share.share({
        //         // title: "World Metal Contact sa App",
        //         // message: "New Product"
        //         message: 'BAM: we\'re helping your business with awesome React Native apps',
        // url: 'http://bam.tech',
        // title: 'Wow, did you see that?'
        //       } catch (error) {
        //       alert(error.message);
        //     }
        //   };

        // const url = 'https://awesome.contents.com/';
        // const title = 'World Metal Contact sa App';
        // const message = 'New Product';
        // const icon = 'data:<data_type>/<file_extension>;base64,<base64_data>';
        // const options = {
        //     title: "World Metal Contact sa App",
        //     subject: getArticleDetailsResponse?.data[0]?.title,
        //     message: "New Product",
        //     image: getArticleDetailsResponse?.data[0]?.image
        // };

        // Share.open(options);

        Share.open({
            title: "World Metal Contact sa App",
            subject: getArticleDetailsResponse?.data[0]?.title,
            message: getArticleDetailsResponse?.data[0]?.title,
            url: "https://worldmetalcontact.com/",
        })
            .then((res) => { console.log(res) })
            .catch((err) => { err && console.log(err); });
    }

    return (
        <MainContainer
            style={{ backgroundColor: "white" }}
            loading={getArticleDetailsLoading}
        >
            {/* <StatusBar translucent backgroundColor="red"/> */}
            <ScrollView
                showsVerticalScrollIndicator={false}
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
            <View style={{
                width: 65,
                height: 100,
                position: "absolute",
                right: -5,
                borderRadius: 0,
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
                elevation: 4,
                paddingRight: 5,
                bottom: 40,
                justifyContent: "space-between",
                paddingVertical: 10,
                alignItems: "center",
                backgroundColor: "#fff"
            }} >
                <Img
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
                    }}
                />
                <Ionicons
                    name="md-share-social-sharp"
                    size={30}
                    color="red"
                    onPress={onShare}
                />
            </View>
        </MainContainer>
    )
}
export default NewsDetailScreen
