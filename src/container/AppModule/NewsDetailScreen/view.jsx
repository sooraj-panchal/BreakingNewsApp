import React from "react";
import { View, FlatList, Dimensions, StatusBar, ScrollView } from 'react-native'
import Animated from "react-native-reanimated";
import Ionicons from "react-native-vector-icons/Ionicons";
import { headerImageArray } from "../../../../dummyArray";
import { AppImages } from "../../../assets/images/map";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import Img from "../../../components/Img";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import { screenWidth } from "../../../utils/styleUtils";

function NewsDetailScreen({
    navigation,
}) {
    const HEADER_HEIGHT = 60;
    const IMAGE_HEIGHT = 240;
    // const CONTACT_PADDING = 10

    const propertyImages = [
        { id: "1" },
        { id: "2" },
        { id: "3" }
    ]

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
                        width: screenWidth * 0.95,
                        height: 180,
                        resizeMode: "stretch",
                        borderRadius: 5,
                        // alignSelf:"center"
                    }}
                    mpImage={{ mt: 10 }}
                />
            </>
        )
    }


    return (
        <MainContainer style={{ backgroundColor: "white" }} >
            {/* <Container height={StatusBar.currentHeight} /> */}
            {/* <StatusBar translucent backgroundColor="red"/> */}
            <ScrollView
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                {/* <Header
                    navigation={navigation}
                /> */}
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
                    // style={styles.propertyTypeListContainer}
                    data={headerImageArray}
                    renderItem={({ item, index }) => {
                        return <HeaderImagesList
                            imgSrc={item.image}
                            imageTitle="Loream-ipsulm dummy text"
                        />
                    }}
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
                }} labelSize={25} mpLabelStyle={{ pl: 20, pt: 20 }} >Title</Label>
                <Label labelStyle={{
                    fontSize: 20,
                    color: "black"
                }} mpLabelStyle={{ pl: 20, pt: 10 }} labelSize={20}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                    semper turpis. Ut in fringilla nisl, sit amet aliquet urna. Donec
                    sollicitudin libero sapien, ut accumsan justo venenatis et. Proin iaculis
                    ac dolor eget malesuada. Cras commodo, diam id semper sodales, tortor leo
                    suscipit leo, vitae dignissim velit turpis et diam. Proin tincidunt
                    euismod elit, at porttitor justo maximus vel. Proin viverra, nibh non
                    accumsan sollicitudin, arcu metus sagittis nunc, et tempor tellus ligula
                    et justo. Pellentesque ultrices fermentum efficitur. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Praesent nec convallis nisl, et rhoncus
                    mauris. Morbi consequat sem tellus, in scelerisque lorem vehicula ut.
      {'\n\n'}Nam vel imperdiet massa. Donec aliquet turpis quis orci fermentum,
      eget egestas tellus suscipit. Sed commodo lectus ac augue mattis, a
      pulvinar metus venenatis. Vestibulum cursus rhoncus mauris, fringilla
      luctus risus eleifend ut. Vestibulum efficitur imperdiet scelerisque.
      Pellentesque sit amet lorem bibendum, congue dolor suscipit, bibendum est.
      Aenean leo nibh, varius vel felis nec, sagittis posuere nunc. Vestibulum
      ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
      curae; Duis ullamcorper laoreet orci, ac tempus dui aliquet et. Morbi
      porta nisi sed augue vestibulum tristique. Donec nisi ligula, efficitur at
      arcu et, sagittis imperdiet urna. Sed sollicitudin nisi eget pulvinar
      ultricies. Ut sit amet dolor luctus massa dapibus tincidunt non posuere
      odio. Aliquam sit amet vehicula nisi.
    </Label>
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
        </MainContainer>
    )
}
export default NewsDetailScreen


// // import React, { useCallback, useEffect, useRef, useState } from 'react';
// // import { View, StyleSheet, Text, FlatList, Image, Dimensions, Animated } from 'react-native';
// // import { AppImages } from '../../../assets/images/map';
// // // import Animated, { Extrapolate } from "react-native-reanimated";

// // const DOTS_WIDTH = 30
// // const DEVICE_WIDTH = Dimensions.get("window").width
// // const DEVICE_HEIGHT = Dimensions.get("window").height

// // const Pagination = ({
// //     images,
// //     AnimatedValue
// // }) => {
// //     const translateX = AnimatedValue.interpolate({
// //         inputRange: [-DEVICE_WIDTH, 0, DEVICE_WIDTH],
// //         outputRange: [-DOTS_WIDTH, 0, DOTS_WIDTH]
// //     })
// //     return (
// //         <View style={{
// //             flexDirection: "row",
// //             height: DOTS_WIDTH,
// //             position: 'absolute',
// //             bottom: 20,
// //         }} >
// //             <Animated.View style={{
// //                 // backgroundColor:"red",
// //                 borderWidth: 2,
// //                 borderColor: 'red',
// //                 width: DOTS_WIDTH,
// //                 height: DOTS_WIDTH,
// //                 borderRadius: DOTS_WIDTH / 2,
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //                 flexDirection: "row",
// //                 transform: [{ translateX }]
// //             }} >
// //                 {images.map((item, index) => {
// //                     return (
// //                         <View style={{
// //                             width: DOTS_WIDTH,
// //                             alignItems: "center",
// //                             justifyContent: "center",
// //                             backgroundColor: "white"
// //                         }} >
// //                             <View style={{
// //                                 width: DOTS_WIDTH * 0.3,
// //                                 height: DOTS_WIDTH * 0.3,
// //                                 // height:DOTS_WIDTH,
// //                                 alignItems: "center",
// //                                 justifyContent: "center",
// //                                 backgroundColor: "white",
// //                                 borderRadius: 100
// //                                 // transform: [{ translateX }]
// //                             }} />
// //                         </View>
// //                     )
// //                 })}
// //             </Animated.View>

// //         </View>
// //     )
// // }

// // const FadeIn = () => {
// //     const clientId = "_3_Z78HVDwbUCItag2Cgzd0m4sd-f4clqV-6M6-or7U"
// //     const url = `https://api.unsplash.com/photos/?client_id=${clientId}`
// //     const [images, setImages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// //     const AnimatedValue = useRef(new Animated.Value(0)).current


// //     useEffect(() => {
// //         // const asyncData = async () => {
// //         //     const getImages = await fetch(url, {
// //         //         method: "get"
// //         //     })
// //         //     const res = await getImages.json()
// //         //     setImages(res)
// //         // }
// //         // asyncData()
// //     }, [])
// //     const renderImagesData = ({ item, index }) => {

// //         // const scale = AnimatedValue.interpolate({
// //         //     inputRange: [(index - 1) * DEVICE_WIDTH, index * DEVICE_WIDTH, (index + 1) * DEVICE_WIDTH],
// //         //     outputRange: [0, 1, 0]
// //         // })
// //         return (
// //             // <Animated.View style={{
// //             //     width: DEVICE_WIDTH,
// //             //     height: DEVICE_HEIGHT,
// //             // }} >
// //             <Animated.Image
// //                 source={{ uri: AppImages.property_image }}
// //                 style={{
// //                     // flex: 1,
// //                     width: DEVICE_WIDTH,
// //                     height: DEVICE_HEIGHT,
// //                     // alignItems:"center",
// //                     // backgroundColor: "red"
// //                     // transform: [{ scale }]
// //                 }}
// //             />
// //             // {/* </Animated.View> */}
// //         )
// //     }
// //     const translateX = AnimatedValue.interpolate({
// //         inputRange: [-DEVICE_WIDTH, 0, DEVICE_WIDTH],
// //         outputRange: [-DOTS_WIDTH, 0, DOTS_WIDTH]
// //     })
// //     return (
// //         <View style={styles.container}>
// //             <Animated.FlatList
// //                 data={images}
// //                 horizontal={true}
// //                 renderItem={renderImagesData}
// //                 pagingEnabled
// //                 style={{
// //                     // alignSelf:"center"
// //                 }}
// //                 contentContainerStyle={{
// //                     alignItems: "center",
// //                     // width: DEVICE_WIDTH * 0.80,
// //                     // alignSelf:"center"
// //                     // justifyContent:"center"
// //                 }}
// //                 // ItemSeparatorComponent={() => <Animated.View style={{ width: 40 }} />}
// //                 // ListHeaderComponent={() => <Animated.View style={{ width: 40 }} />}
// //                 // onViewableItemsChanged={_onViewableItemsChanged}
// //                 // viewabilityConfig={{
// //                 //     itemVisiblePercentThreshold: 50
// //                 // }}
// //                 onScroll={Animated.event(
// //                     [{ nativeEvent: { contentOffset: { x: AnimatedValue } } }],
// //                     { useNativeDriver: true }
// //                 )}
// //             />
// //             <Pagination AnimatedValue={AnimatedValue} images={images} />
// //         </View>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     container: {
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         flex: 1,
// //     },
// // });

// // export default FadeIn;

// // // import React, { Component } from "react";
// // // import {
// // //     Animated,
// // //     Dimensions,
// // //     ScrollView,
// // //     StyleSheet,
// // //     Text,
// // //     View
// // // } from "react-native";

// // // const SCREEN_WIDTH = Dimensions.get("window").width;

// // // const xOffset = new Animated.Value(0);

// // // const Screen = props => {
// // //     return (
// // //         <View style={styles.scrollPage}>
// // //             <View style={[styles.screen]}>
// // //                 <Text style={styles.text}>{props.text}</Text>
// // //             </View>
// // //         </View>
// // //     );
// // // };

// // // const transitionAnimation = index => {
// // //     return {
// // //         transform: [
// // //             { perspective: 800 },
// // //             // {
// // //             //     scale: xOffset.interpolate({
// // //             //         inputRange: [
// // //             //             (index - 1) * SCREEN_WIDTH,
// // //             //             index * SCREEN_WIDTH,
// // //             //             (index + 1) * SCREEN_WIDTH
// // //             //         ],
// // //             //         outputRange: [0.25, 1, 0.25]
// // //             //     })
// // //             // },
// // //             // {
// // //             //     rotateX: xOffset.interpolate({
// // //             //         inputRange: [
// // //             //             (index - 1) * SCREEN_WIDTH,
// // //             //             index * SCREEN_WIDTH,
// // //             //             (index + 1) * SCREEN_WIDTH
// // //             //         ],
// // //             //         outputRange: ["45deg", "0deg", "45deg"]
// // //             //     })
// // //             // },
// // //             // {
// // //             //     rotateY: xOffset.interpolate({
// // //             //         inputRange: [
// // //             //             (index - 1) * SCREEN_WIDTH,
// // //             //             index * SCREEN_WIDTH,
// // //             //             (index + 1) * SCREEN_WIDTH
// // //             //         ],
// // //             //         outputRange: ["-45deg", "0deg", "45deg"]
// // //             //     })
// // //             // }
// // //         ]
// // //     };
// // // };
// // // const data = [
// // //     { id: 1 }, { id: 2 }, { id: 3 }
// // // ]
// // // export default class App extends Component {
// // //     render() {
// // //         return (
// // //             <Animated.ScrollView
// // //                 scrollEventThrottle={16}
// // //                 // onScroll={Animated.event(
// // //                 //     [{ nativeEvent: { contentOffset: { x: xOffset } } }],
// // //                 //     { useNativeDriver: true }
// // //                 // )}
// // //                 horizontal
// // //                 pagingEnabled
// // //                 style={styles.scrollView}
// // //             >
// // //                 {
// // //                     data.map((item, index) => {
// // //                         return (
// // //                             <Screen text="Screen 1" index={index} />
// // //                         )
// // //                     })
// // //                 }
// // //             </Animated.ScrollView>
// // //         );
// // //     }
// // // }

// // // const styles = StyleSheet.create({
// // //     scrollView: {
// // //         flexDirection: "row",
// // //         backgroundColor: "#00d4ff"
// // //     },
// // //     scrollPage: {
// // //         width: SCREEN_WIDTH,
// // //         padding: 20
// // //     },
// // //     screen: {
// // //         height: 600,
// // //         justifyContent: "center",
// // //         alignItems: "center",
// // //         borderRadius: 25,
// // //         backgroundColor: "white"
// // //     },
// // //     text: {
// // //         fontSize: 45,
// // //         fontWeight: "bold"
// // //     }
// // // });


// // import {View, ScrollView, Image, Animated,Text,StatusBar} from 'react-native';
// // import React, {useState, useEffect,useRef} from 'react';
// // import {useSafeArea} from 'react-native-safe-area-context';
// // import { AppImages } from '../../../assets/images/map';
// // export const BANNER_H = 350;
// // export const TOPNAVI_H = 50;

// // const TopNavigation = props => {
// //   const safeArea = useSafeArea();

// //   const {title, scrollA} = props;
// //   const isFloating = !!scrollA;
// //   const [isTransparent, setTransparent] = useState(isFloating);

// //   useEffect(() => {
// //     if (!scrollA) {
// //       return;
// //     }
// //     const listenerId = scrollA.addListener(a => {
// //       const topNaviOffset = BANNER_H - TOPNAVI_H - safeArea.top;
// //       isTransparent !== a.value < topNaviOffset &&
// //         setTransparent(!isTransparent);
// //     });
// //     return () => scrollA.removeListener(listenerId);
// //   });

// //   return (
// //     <>
// //       <StatusBar
// //         barStyle={isTransparent ? 'light-content' : 'dark-content'}
// //         backgroundColor="transparent"
// //         translucent
// //       />
// //       <View style={styles.container(safeArea, isFloating, isTransparent)}>
// //         <Text style={styles.title(isTransparent)}>{title}</Text>
// //       </View>
// //     </>
// //   );
// // };


// // const PropertyDetailScrenn = () => {
// //   const scrollA = useRef(new Animated.Value(0)).current;

// //   return (
// //     <View>
// //       <TopNavigation title="Home" scrollA={scrollA} />
// //       <Animated.ScrollView
// //         // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
//         onScroll={Animated.event(
//           [{nativeEvent: {contentOffset: {y: scrollA}}}],
//           {useNativeDriver: true},
//         )}
//         scrollEventThrottle={16}
// //       >
// //         <View style={styles.bannerContainer}>
// //           <Animated.Image
// //             style={styles.banner(scrollA)}
// //             source={{uri:AppImages.property_image}}
// //           />
// //         </View>
//         <Text style={{
//             fontSize:20,
//             color:"white",margin:20
//         }}>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
//       semper turpis. Ut in fringilla nisl, sit amet aliquet urna. Donec
//       sollicitudin libero sapien, ut accumsan justo venenatis et. Proin iaculis
//       ac dolor eget malesuada. Cras commodo, diam id semper sodales, tortor leo
//       suscipit leo, vitae dignissim velit turpis et diam. Proin tincidunt
//       euismod elit, at porttitor justo maximus vel. Proin viverra, nibh non
//       accumsan sollicitudin, arcu metus sagittis nunc, et tempor tellus ligula
//       et justo. Pellentesque ultrices fermentum efficitur. Lorem ipsum dolor sit
//       amet, consectetur adipiscing elit. Praesent nec convallis nisl, et rhoncus
//       mauris. Morbi consequat sem tellus, in scelerisque lorem vehicula ut.
//       {'\n\n'}Nam vel imperdiet massa. Donec aliquet turpis quis orci fermentum,
//       eget egestas tellus suscipit. Sed commodo lectus ac augue mattis, a
//       pulvinar metus venenatis. Vestibulum cursus rhoncus mauris, fringilla
//       luctus risus eleifend ut. Vestibulum efficitur imperdiet scelerisque.
//       Pellentesque sit amet lorem bibendum, congue dolor suscipit, bibendum est.
//       Aenean leo nibh, varius vel felis nec, sagittis posuere nunc. Vestibulum
//       ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
//       curae; Duis ullamcorper laoreet orci, ac tempus dui aliquet et. Morbi
//       porta nisi sed augue vestibulum tristique. Donec nisi ligula, efficitur at
//       arcu et, sagittis imperdiet urna. Sed sollicitudin nisi eget pulvinar
//       ultricies. Ut sit amet dolor luctus massa dapibus tincidunt non posuere
//       odio. Aliquam sit amet vehicula nisi.
//     </Text>
// //       </Animated.ScrollView>
// //     </View>
// //   );
// // };

// // const styles = {
// //   bannerContainer: {
// //     marginTop: -1000,
// //     paddingTop: 1000,
// //     alignItems: 'center',
// //     overflow: 'hidden',
// //   },
// //   banner: scrollA => ({
// //     height: BANNER_H,
// //     width: '200%',
// //     transform: [
// //       {
// //         translateY: scrollA.interpolate({
// //           inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
// //           outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
// //         }),
// //       },
// //       {
// //         scale: scrollA.interpolate({
// //           inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
// //           outputRange: [2, 1, 0.5, 0.5],
// //         }),
// //       },
// //     ],
// //   }),
// //   container: (safeArea, isFloating, isTransparent) => ({
// //     paddingTop: safeArea.top,
// //     marginBottom: isFloating ? -TOPNAVI_H - safeArea.top : 0,
// //     height: TOPNAVI_H + safeArea.top,
// //     justifyContent: 'center',
// //     shadowOffset: {y: 0},
// //     backgroundColor: isTransparent ? '#0001' : '#FFF',
// //     shadowOpacity: isTransparent ? 0 : 0.5,
// //     elevation: isTransparent ? 0.01 : 5,
// //     zIndex: 100,
// //   }),
// //   title: isTransparent => ({
// //     textAlign: 'center',
// //     fontWeight: 'bold',
// //     fontSize: 16,
// //     color: isTransparent ? '#FFF' : '#000',
// //   }),
// // };

// // export default PropertyDetailScrenn;

// import React, { useRef } from 'react'
// import { Dimensions, Image, ScrollView, View, Text, SafeAreaView, Animated } from 'react-native'
// import { AppImages } from '../../../assets/images/map'
// const IMAGE_HEIGHT = Dimensions.get("screen").width
// const HEADER_HEIGHT = 60
// const Header = ({
//     scrollA
// }) => {

//     // const HEADERY = scrollA?.interpolate({
//     //     inputRange: [0, HEADER_HEIGHT],
//     //     outputRange: [-HEADER_HEIGHT, HEADER_HEIGHT],
//     //     extrapolate: "clamp"
//     // })
//     const HEADERY = scrollA?.interpolate({
//         inputRange: [0, HEADER_HEIGHT / 2, HEADER_HEIGHT + 40],
//         outputRange: [-HEADER_HEIGHT, -HEADER_HEIGHT, 0],
//         extrapolate: "clamp"
//     })
//     const opacityY = scrollA?.interpolate({
//         inputRange: [0,HEADER_HEIGHT/2, HEADER_HEIGHT*2,HEADER_HEIGHT*2,HEADER_HEIGHT*2],
//         outputRange: [0,0,0,0,0,1],
//         extrapolate: "clamp"
//     })

//     return (
//             <Animated.View style={{
//                 position: "absolute",
//                 top: 0, left: 0, right: 0,
//                 backgroundColor: "grey",
//                 height: HEADER_HEIGHT+40,
//                 justifyContent: "center",
//                 // alignItems:"center",
//                 zIndex:100,
//                 paddingLeft: 20,
//                 transform: [{ translateY: HEADERY }]
//             }} >
//                 <Animated.Text style={{
//                     color: "white",
//                     fontSize: 20,
//                     letterSpacing: 2,
//                     opacity:opacityY
//                 }} >PropertyDetail</Animated.Text>
//             </Animated.View>
//     )
// }

// const NewsDetailScreen = ({

// }) => {
//     const scrollA = useRef(new Animated.Value(0)).current;

//     return (
//         <SafeAreaView style={{
//             flex: 1,
//         }} >
//             <Header scrollA={scrollA} />
//             <Animated.ScrollView
//                 onScroll={Animated.event(
//                     [{ nativeEvent: { contentOffset: { y: scrollA } } }],
//                     { useNativeDriver: true },
//                 )}
//                 scrollEventThrottle={16}
//             >
//                 <Image
//                     source={{ uri: AppImages.property_image }}
//                     style={{
//                         width: IMAGE_HEIGHT,
//                         height: 300,
//                         alignSelf: "center",
//                     }}
//                 />
//                 <Text style={{
//                     fontSize: 20,
//                     color: "white", margin: 20
//                 }}>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
//                     semper turpis. Ut in fringilla nisl, sit amet aliquet urna. Donec
//                     sollicitudin libero sapien, ut accumsan justo venenatis et. Proin iaculis
//                     ac dolor eget malesuada. Cras commodo, diam id semper sodales, tortor leo
//                     suscipit leo, vitae dignissim velit turpis et diam. Proin tincidunt
//                     euismod elit, at porttitor justo maximus vel. Proin viverra, nibh non
//                     accumsan sollicitudin, arcu metus sagittis nunc, et tempor tellus ligula
//                     et justo. Pellentesque ultrices fermentum efficitur. Lorem ipsum dolor sit
//                     amet, consectetur adipiscing elit. Praesent nec convallis nisl, et rhoncus
//                     mauris. Morbi consequat sem tellus, in scelerisque lorem vehicula ut.
//       {'\n\n'}Nam vel imperdiet massa. Donec aliquet turpis quis orci fermentum,
//       eget egestas tellus suscipit. Sed commodo lectus ac augue mattis, a
//       pulvinar metus venenatis. Vestibulum cursus rhoncus mauris, fringilla
//       luctus risus eleifend ut. Vestibulum efficitur imperdiet scelerisque.
//       Pellentesque sit amet lorem bibendum, congue dolor suscipit, bibendum est.
//       Aenean leo nibh, varius vel felis nec, sagittis posuere nunc. Vestibulum
//       ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
//       curae; Duis ullamcorper laoreet orci, ac tempus dui aliquet et. Morbi
//       porta nisi sed augue vestibulum tristique. Donec nisi ligula, efficitur at
//       arcu et, sagittis imperdiet urna. Sed sollicitudin nisi eget pulvinar
//       ultricies. Ut sit amet dolor luctus massa dapibus tincidunt non posuere
//       odio. Aliquam sit amet vehicula nisi.
//     </Text>
//             </Animated.ScrollView>
//         </SafeAreaView>
//     )
// }
// export default NewsDetailScreen