import React, { useEffect } from "react";
import { View, FlatList, ScrollView, Linking } from 'react-native'
import Img from "../../../components/Img";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import { screenWidth } from "../../../utils/styleUtils";
import HTML from "react-native-render-html";
import { AppImages } from "../../../assets/images/map";
import Ionicons from "react-native-vector-icons/Ionicons";
import Share from 'react-native-share';
import { styles } from "./styles";
import Container from "../../../components/Container";

const HEADER_HEIGHT = 60;


const HeaderImagesList = ({
    imagePath,
    image
}) => {
    console.log(imagePath + image)
    return (
        <>
            <Img
                imgSrc={{ uri: `${imagePath}${image}` }}
                imgStyle={styles.imageStyle}
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
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={[0]}
                    renderItem={() => {
                        return <HeaderImagesList
                            image={getArticleDetailsResponse?.data[0]?.image}
                            imagePath={getArticleDetailsResponse?.path}
                        />
                    }}
                    keyExtractor={(_, index) => index.toString()}
                    scrollEnabled={false}
                    pagingEnabled
                    horizontal={true}
                    ListHeaderComponent={() => (<Container mpContainer={{ mr: 10 }} />)}
                    ItemSeparatorComponent={() => (<Container mpContainer={{ ml: 10 }} />)}
                    ListFooterComponent={() => (<Container mpContainer={{ mr: 40 }} />)}
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
                        fontSize: 16
                    }}
                />
            </ScrollView>
            <View style={styles.rightShareContainer} >
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
