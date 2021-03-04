import React, { useEffect, useState } from "react";
import { View, FlatList, StatusBar, Alert, ActivityIndicator, StyleSheet, Platform } from "react-native";
import Img from "../../../components/Img";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import { LightGrayColor } from "../../../assets/colors";
import Container from "../../../components/Container";
import { screenWidth } from "../../../utils/styleUtils";
import { AuthStack } from "../../../navigator/navActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as globals from "../../../utils/globals";
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import moment from 'moment'
import messaging from '@react-native-firebase/messaging';

const HeaderImagesList = ({
    item
}, parallaxProps) => {
    return (
        <View>
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: `${globals.imagePath}article/${item.image}` }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
            </View>
            <Label labelStyle={{
                position: "absolute",
                color: "white",
                alignSelf: "center",
                bottom: 5,
                textAlign: "center",
                elevation: 1,
                borderRadius: 5,
                backgroundColor: "rgba(0,0,0,0.7)",
            }} numberOfLines={2} labelSize={15} mpLabelStyle={{ ph: 10, pv: 2 }}>
                {item.title}
            </Label>
        </View>
    )
}

const NewsList = ({
    imgSrc,
    title,
    description,
    time,
    onPress
}) => {
    var text = description.replace(/(<([^>]+)>)/g, "");
    return (
        <Container
            containerStyle={{
                justifyContent: "center",
                borderRadius: 4,
                height: null,
                borderWidth: 1,
                borderColor: LightGrayColor
            }} mpContainer={{ ph: 10, mh: 15, pv: 10 }}
            onPressCard={onPress}
        >
            <View style={{
                flexDirection: "row",
                alignItems: "center"
            }} >
                <Img
                    imgSrc={imgSrc}
                    height={90}
                    width={90}
                    imgStyle={{
                        borderRadius: 5
                    }}
                />
                <View style={{
                    paddingLeft: 15
                }} >
                    <Label labelSize={16}
                        labelStyle={{ maxWidth: 200, fontWeight: "900" }}
                    >{title}</Label>
                    <Label labelSize={12}
                        labelStyle={{ color: "grey", maxWidth: 200 }}
                        mpLabelStyle={{ mt: 5 }}
                        numberOfLines={2} >{text}</Label>
                    <Label labelSize={12}
                        labelStyle={{ color: "grey", maxWidth: 200 }}
                        mpLabelStyle={{ mt: 5 }}
                        numberOfLines={3} >{time}</Label>
                </View>
            </View>
        </Container>
    )
}

const HomeScreen = ({
    navigation,
    getArticleListWatcher,
    getArticeListResponse,
    getTrandingImageListWatcher,
    getTrandingImageListLoading,
    getTrandingImageListResponse
}) => {
    const [getArticleListData, setgetArticleListData] = useState([])
    const [getArticeListLoading, setGetArticeListLoading] = useState(true)
    const [getArticeListPaginLoading, setGetArticeListPaginLoading] = useState(true)
    const [offset, setOffset] = useState(1);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Label
                    labelSize={15}
                    labelStyle={{
                        color: "red",
                        fontWeight: "bold",
                    }}
                    onPressLabel={() => {
                        logoutHandler()
                    }}
                >Logout</Label>
            }
        })
        getTrandingImageListWatcher()
        getArticleList()
        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log(
                'Notification caused app to open from background state:',
                remoteMessage.notification,
            );
            if (remoteMessage) {
                const { message } = remoteMessage.data
                let parsedMessage = JSON.parse(message);
                navigation.navigate("NewsDetail", {
                    article_Id: parsedMessage.article_id
                })
            }
        });
        messaging()
            .getInitialNotification()
            .then(remoteMessage => {
                if (remoteMessage) {
                    console.log(
                        'Notification caused app to open from quit state:',
                        remoteMessage,
                    );
                    const { message } = remoteMessage.data
                    let parsedMessage = JSON.parse(message);
                    navigation.navigate("NewsDetail", {
                        article_Id: parsedMessage.article_id
                    })
                }
            });
    }, [])

    const logoutHandler = () => {
        Alert.alert(
            "Breaking News",
            "Are you sure to want logout?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => AsyncStorage.clear().then(() => {
                        navigation.dispatch(AuthStack)
                        globals.authToken = ""
                    }),
                }
            ],
            { cancelable: false }
        );
    }

    const getArticleList = () => {
        let data = new FormData()
        data.append("sort", "created_at")
        data.append("order", 'desc')
        data.append("limit", '3')
        data.append("page", offset)
        getArticleListWatcher(data)
    }

    useEffect(() => {
        if (getArticeListResponse) {
            setGetArticeListPaginLoading(false)
            if (getArticeListResponse?.status == "success") {
                setGetArticeListLoading(false)
                if (getArticeListResponse?.data?.length) {
                    setOffset(offset + 1);
                    setgetArticleListData(arr => [...arr, ...getArticeListResponse?.data])
                }
            }
            setGetArticeListLoading(false)
        }
    }, [getArticeListResponse])

    const heaederImageListRender = () => {
        console.log("getTrandingImageListResponse", getTrandingImageListResponse)
        return (
            <>
                <Carousel
                    sliderWidth={screenWidth}
                    sliderHeight={screenWidth}
                    itemWidth={screenWidth - 30}
                    data={getTrandingImageListResponse?.data}
                    renderItem={HeaderImagesList}
                    hasParallaxImages={true}
                />
                <Label
                    labelSize={25}
                    mpLabelStyle={{ mt: 20, pl: 15 }}
                    labelStyle={{
                        fontWeight: "bold"
                    }} >Latest Post</Label>
            </>
        )
    }
    return (
        <MainContainer style={{ backgroundColor: 'white' }}
            loading={getArticeListLoading || getTrandingImageListLoading}
        >
            <StatusBar backgroundColor={"transparent"} barStyle="dark-content" />
            <FlatList
                data={getArticleListData}
                contentContainerStyle={{ paddingBottom: 100 }}
                renderItem={({ item }) => {
                    const time = moment(item.created_at).startOf('hour').fromNow();
                    // console.log(time)
                    let newTime;
                    if (time >= "7 days ago") {
                        newTime = moment(item.created_at).format('D/M/Y');
                    } else {
                        newTime = moment(item.created_at).startOf('hour').fromNow();
                    }
                    return <NewsList
                        imgSrc={{ uri: `${globals.imagePath}article/${item.image}` }}
                        title={item.title}
                        description={item.description}
                        time={newTime}
                        onPress={() => {
                            navigation.navigate("NewsDetail", {
                                article_Id: item.id
                            })
                        }}
                    />
                }}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={{ marginVertical: 5 }} />}
                ListHeaderComponent={() => heaederImageListRender()}
                ListHeaderComponentStyle={{
                    marginBottom: 10
                }}
                ListFooterComponent={() => {
                    return (
                        <View style={{
                            height: 100,
                            justifyContent: "center",
                            alignItems: "center",
                        }} >
                            <ActivityIndicator
                                size="large"
                                color="black"
                                animating={getArticeListPaginLoading}
                            />
                        </View>
                    )
                }}
                onEndReachedThreshold={0.2}
                onEndReached={() => {
                    if (getArticleListData.length >= 3) {
                        setGetArticeListPaginLoading(true)
                        getArticleList()
                    }
                }}
            />
        </MainContainer>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    item: {
        width: screenWidth * 0.92,
        height: screenWidth * 0.60,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }),
        backgroundColor: '#f7f7f7',
        borderRadius: 8,
        elevation: 1,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'contain',
    },
});
