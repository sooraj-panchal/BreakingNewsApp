import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { NewsArray } from "../../../../dummyArray";
import { PrimaryColor, LightGrayColor } from "../../../assets/colors";
import { medium } from "../../../assets/fonts/fonts";
import { AppImages } from "../../../assets/images/map";
import Btn from "../../../components/Btn";
import CardView from "../../../components/CardView";
import Container from "../../../components/Container";
import Img from "../../../components/Img";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import moment from 'moment'
import { screenWidth } from "../../../utils/styleUtils";

const NotificatinList = ({
    imgSrc,
    title,
    description,
    time,
    onPress
}) => {
    return (
        <Container
            containerStyle={{
                justifyContent: "center",
                borderRadius: 4,
                height: null,
                borderWidth: 1,
                borderColor: LightGrayColor
            }} mpContainer={{ ph: 10, mh: 15, pv: 5 }}
            onPressCard={onPress}
        >
            <View style={{
                flexDirection: "row",
                alignItems: "center"
            }} >
                <Img
                    imgSrc={imgSrc}
                    height={80}
                    width={80}
                    imgStyle={{
                        // margin:20
                        resizeMode: "cover",
                        borderRadius: 5
                    }}
                />
                <View style={{
                    paddingLeft: 20,
                    flex: 1
                }} >
                    <Label labelSize={16}
                        labelStyle={{ maxWidth: "95%", fontWeight: "900" }}
                    >{title}</Label>
                    <Label labelSize={12}
                        labelStyle={{ minWidth: "95%", maxWidth: "85%", color: "grey" }}
                        mpLabelStyle={{ mt: 5 }}
                        numberOfLines={2} >{description}</Label>
                    <Label labelSize={12}
                        labelStyle={{ color: "grey" }}
                        mpLabelStyle={{ mt: 5 }}
                        numberOfLines={3} >{time}</Label>
                </View>
            </View>
        </Container>
    )
}

function NotificationScreen({
    navigation,
    getNotificationWatcher,
    getNotificationLoading,
    getNotificationResponse
}) {

    useEffect(() => {
        getNotificationWatcher()
    }, [])

    return (
        <MainContainer style={{ backgroundColor: "white" }}
         loading={getNotificationLoading} >
            <FlatList
                        showsVerticalScrollIndicator={false}

                data={getNotificationResponse?.data}
                renderItem={({ item, index }) => {
                    const time = moment(item.created_at).startOf("hour").fromNow();
                    let newTime;
                    if (time == "an hour ago") {
                        newTime = "1 hour ago"
                    } else if(time == "a day ago") {
                        newTime = "1 day ago"
                    }else{
                        newTime = time
                    }
                    var text = item.description.replace(/(<([^>]+)>)/g, "");
                    // console.log(text)
                    return <NotificatinList
                        imgSrc={{ uri: getNotificationResponse?.path + item.image }}
                        title={item.title}
                        description={text}
                        time={newTime}
                        onPress={() => {
                            navigation.navigate("NewsDetail", {
                                article_Id: item.article_id,
                                notification_Id: item.notification_id
                            })
                        }}
                    />
                }}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={{ marginVertical: 5 }} />}
                ListHeaderComponent={() => <View style={{ marginTop: 10 }} />}
                ListFooterComponent={() => <View style={{ marginBottom: 10 }} />}
                showsVerticalScrollIndicator={false}
            />
        </MainContainer>
    )
}
export default NotificationScreen