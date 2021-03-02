import React, { useEffect, useState } from "react";
import { View, ScrollView, FlatList, StatusBar, Alert, TouchableOpacity } from "react-native";
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
import { screenHeight, screenWidth } from "../../../utils/styleUtils";
import { headerImageArray, NewsArray } from "../../../../dummyArray";
import { AuthStack } from "../../../navigator/navActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as globals from "../../../utils/globals";


const HomeScreen = ({
    navigation,
    route,
    asyncUserDataWatcher,
    asyncUserDataResponse,
    getArticleListWatcher,
    getArticeListLoading,
    getArticeListResponse
}) => {
    const [getArticleListData, setgetArticleListData] = useState([])
    const [offset, setOffset] = useState(0);

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
                        // resizeMode: "stretch",
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
                            labelStyle={{ maxWidth: 200, fontWeight: "900" }}
                        >{title}</Label>
                        <Label labelSize={12}
                            labelStyle={{ color: "grey", maxWidth: 200 }}
                            mpLabelStyle={{ mt: 5 }}
                            numberOfLines={3} >{description}</Label>
                        <Label labelSize={12}
                            labelStyle={{ color: "grey", maxWidth: 200 }}
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

    useEffect(() => {
        getArticleList()
    }, [])
    const getArticleList = () => {
        let data = new FormData()
        data.append("sort", "id")
        data.append("order", 'asc')
        data.append("limit", '5')
        data.append("page", offset)
        getArticleListWatcher(data)
    }
    useEffect(() => {
        if (getArticeListResponse?.status == "success") {
            // setOffset(offset + 1);
            // setgetArticleListData(arr => [arr, ...getArticeListResponse?.data])
            if (getArticeListResponse?.data?.length) {
                setOffset(offset + 1);
                setgetArticleListData(arr => [...arr, ...getArticeListResponse?.data])
                // setgetArticleListData([...getArticleListData, ...getArticeListResponse?.data]);
            }
        }
    }, [getArticeListResponse])
    return (
        <MainContainer style={{ backgroundColor: 'white' }}
            loading={true}
        modalLoader
        >
            <StatusBar backgroundColor={"transparent"} barStyle="dark-content" />
            {/* <ScrollView
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            > */}
            <View>
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
                    keyExtractor={(_, index) => index.toString()}
                    pagingEnabled
                    horizontal={true}
                    ListHeaderComponent={() => (<View style={{ marginRight: 20 }} />)}
                    ItemSeparatorComponent={() => (<View style={{ marginLeft: 10 }} />)}
                    ListFooterComponent={() => (<View style={{ marginRight: 40 }} />)}
                />
            </View>
            <Label
                labelSize={25}
                mpLabelStyle={{ mt: 20, pl: 15 }}

                labelStyle={styles.headerLabel}  >News</Label>
            <FlatList
                data={getArticleListData}
                renderItem={({ item, index }) => {
                    // console.log(`${getArticeListResponse?.path}${item.image}`)
                    return <NewsList
                        imgSrc={{ uri: `${getArticeListResponse?.path}${item.image}` }}
                        title={item.title}
                        description={item.description}
                        time={item.time}
                    />
                }}
                // scrollEnabled={false}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={{ marginVertical: 5 }} />}
                ListHeaderComponent={() => <View style={{ marginTop: 10 }} />}
                ListFooterComponent={() =>
                    <View style={{ marginBottom: 10 }}

                    />
                }
                onEndReachedThreshold={0.1}
                showsVerticalScrollIndicator={false}
                onEndReached={(info) => {
                    // console.log("hello")
                    getArticleList()
                }}
            />
            {/* </ScrollView> */}
        </MainContainer>
    )
}

export default HomeScreen;

// import React, { useState, useEffect } from 'react';

// //import all the components we are going to use
// import {
//     SafeAreaView,
//     View,
//     Text,
//     TouchableOpacity,
//     StyleSheet,
//     FlatList,
//     ActivityIndicator,
// } from 'react-native';

// const App = () => {
//     const [loading, setLoading] = useState(true);
//     const [dataSource, setDataSource] = useState([]);
//     const [offset, setOffset] = useState(1);

//     useEffect(() => getData(), []);

//     const getData = () => {
//         console.log('getData');
//         setLoading(true);
//         //Service to get the data from the server to render
//         fetch('https://aboutreact.herokuapp.com/getpost.php?offset=' + offset)
//             //Sending the currect offset with get request
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 //Successful response
//                 setOffset(offset + 1);
//                 //Increasing the offset for the next API call
//                 setDataSource((arr) => [...arr, ...responseJson.results]);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     };

//     const renderFooter = () => {
//         return (
//             //Footer View with Load More button
//             <View style={styles.footer}>
//                 <TouchableOpacity
//                     activeOpacity={0.9}
//                     onPress={getData}
//                     //On Click of button load more data
//                     style={styles.loadMoreBtn}>
//                     <Text style={styles.btnText}>Load More</Text>
//                     {loading ? (
//                         <ActivityIndicator
//                             color="white"
//                             style={{ marginLeft: 8 }} />
//                     ) : null}
//                 </TouchableOpacity>
//             </View>
//         );
//     };

//     const ItemView = ({ item }) => {
//         return (
//             // Flat List Item
//             <Text
//                 style={styles.itemStyle}
//                 onPress={() => getItem(item)}>
//                 {item.id}
//                 {'.'}
//                 {item.title.toUpperCase()}
//             </Text>
//         );
//     };

//     const ItemSeparatorView = () => {
//         return (
//             // Flat List Item Separator
//             <View
//                 style={{
//                     height: 0.5,
//                     width: '100%',
//                     backgroundColor: '#C8C8C8',
//                 }}
//             />
//         );
//     };

//     const getItem = (item) => {
//         //Function for click on an item
//         alert('Id : ' + item.id + ' Title : ' + item.title);
//     };

//     return (
//         <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
//             <View style={styles.container}>
//                 <FlatList contentContainerStyle={{ paddingBottom: 100 }}
//                     data={dataSource}
//                     keyExtractor={(item, index) => index.toString()}
//                     ItemSeparatorComponent={ItemSeparatorView}
//                     enableEmptySections={true}
//                     renderItem={ItemView}
//                     //   ListFooterComponent={renderFooter}
//                     onEndReached={() => {
//                         getData()
//                     }}
//                 />
//             </View>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         justifyContent: 'center',
//         flex: 1,
//     },
//     footer: {
//         padding: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'row',
//     },
//     loadMoreBtn: {
//         padding: 10,
//         backgroundColor: '#800000',
//         borderRadius: 4,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     btnText: {
//         color: 'white',
//         fontSize: 15,
//         textAlign: 'center',
//     },
// });

// export default App;