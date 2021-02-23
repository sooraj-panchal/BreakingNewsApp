import React, { useEffect } from "react";
import { View, ScrollView, FlatList, StatusBar, Alert } from "react-native";
import Btn from "../../../components/Btn";
import CardView from "../../../components/CardView";
import Img from "../../../components/Img";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { PrimaryColor, LightGrayColor, OrangeColor } from "../../../assets/colors";
import styles from "./styles";
import { medium } from "../../../assets/fonts/fonts";
import { AppImages, AuthImages } from "../../../assets/images/map";
import Container from "../../../components/Container";
import { screenWidth } from "../../../utils/styleUtils";
import { headerImageArray, NewsArray } from "../../../../dummyArray";
import { AuthStack } from "../../../navigator/navActions";
import AsyncStorage from "@react-native-async-storage/async-storage";


const HomeScreen = ({
    navigation,
    route,
    asyncUserDataWatcher,
    asyncUserDataResponse
}) => {

    const HeaderImagesList = ({
        imgSrc,
        imageTitle
    }) => {
        return (
            <>
                <Img
                    imgSrc={imgSrc}
                    // width={300}
                    // height={300}
                    imgStyle={{
                        width: screenWidth * 0.80,
                        height: 180,
                        resizeMode: "stretch",
                        borderRadius: 5,
                        // alignSelf:"center"
                    }}
                    mpImage={{ mt: 10 }}
                />
                <Label
                    labelStyle={{
                        position: "absolute",
                        color: "white",
                        bottom: 5,
                        left: 10
                    }}
                    labelSize={18}
                >{imageTitle}</Label>
            </>
        )
    }

    const NewsList = ({
        imgSrc,
        title,
        description,
        time
    }) => {
        return (
            <Container
                containerStyle={{
                    justifyContent: "center",
                    borderRadius: 4,
                    height: null,
                    borderWidth: 1,
                    borderColor: LightGrayColor
                }} mpContainer={{ ph: 10, mh: 15, pv: 10 }}
                onPressCard={() => {
                    navigation.navigate("NewsDetail")
                }}
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
                            // margin:20
                            borderRadius: 5
                        }}
                    />
                    <View style={{
                        paddingLeft: 15
                    }} >
                        <Label labelSize={16}
                            labelStyle={{ maxWidth: "90%", fontWeight: "900" }}
                        >{title}</Label>
                        <Label labelSize={12}
                            labelStyle={{ maxWidth: "85%", color: "grey" }}
                            mpLabelStyle={{ mt: 5 }}
                            numberOfLines={3} >{description}</Label>
                        <Label labelSize={12}
                            labelStyle={{ maxWidth: "90%", color: "grey" }}
                            mpLabelStyle={{ mt: 5 }}
                            numberOfLines={3} >{time}</Label>
                    </View>
                </View>
            </Container>
        )
    }

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
                    }),
                }
            ],
            { cancelable: false }
        );
    }

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
    }, [])

    // useEffect(() => {
    //     if (!asyncUserDataResponse) {
    //         console.log("logout", true)
    //         navigation.dispatch(AuthStack)
    //     }
    // }, [asyncUserDataResponse])

    return (
        <MainContainer style={{ backgroundColor: 'white' }} >
            <StatusBar backgroundColor={"white"} barStyle="dark-content" />
            {/* <Container containerStyle={styles.headerTopContainer}
                mpContainer={{ ph: 20, pt: 15 }}
                height={60}
            >
                <Label
                    labelSize={25}
                    labelStyle={styles.headerLabel}  >Trending</Label>
                <Label
                    labelSize={15}
                    labelStyle={[styles.headerLabel, { color: "red" }]}  >Logout</Label>
            </Container> */}
            <ScrollView
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
            >
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    // style={styles.propertyTypeListContainer}
                    data={headerImageArray}
                    renderItem={({ item, index }) => {
                        return <HeaderImagesList
                            imgSrc={item.image}
                            imageTitle="Loream-ipsulm dummy text"
                        />
                    }}
                    // pagingEnabled
                    horizontal={true}
                    ListHeaderComponent={() => (<View style={{ marginRight: 20 }} />)}
                    ItemSeparatorComponent={() => (<View style={{ marginLeft: 10 }} />)}
                    ListFooterComponent={() => (<View style={{ marginRight: 40 }} />)}
                />
                <Label
                    labelSize={25}
                    mpLabelStyle={{ mt: 20, pl: 15 }}

                    labelStyle={styles.headerLabel}  >News</Label>
                <FlatList
                    data={NewsArray}
                    renderItem={({ item, index }) => {
                        return <NewsList
                            imgSrc={item.image}
                            title="Main Title"
                            description="Loream ipsulm dummy text, Loream ipsulm dummy text"
                            time="2 hr ago"
                        />
                    }}
                    scrollEnabled={false}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={() => <View style={{ marginVertical: 5 }} />}
                    ListHeaderComponent={() => <View style={{ marginTop: 10 }} />}
                    ListFooterComponent={() => <View style={{ marginBottom: 10 }} />}
                    showsVerticalScrollIndicator={false}
                />
            </ScrollView>
        </MainContainer>
    )
}

export default HomeScreen;