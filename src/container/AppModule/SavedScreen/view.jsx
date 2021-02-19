import React from "react";
import { FlatList, View } from "react-native";
import { PrimaryColor } from "../../../assets/colors";
import { AppImages } from "../../../assets/images/map";
import Btn from "../../../components/Btn";
import CardView from "../../../components/CardView";
import Img from "../../../components/Img";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";

function SavedScreen({
    navigation
}) {
    const PropertyList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    const _renderProperyListData = () => {
        return (
            <CardView
                height={160}
                cardStyle={{
                    justifyContent: "center",
                    borderRadius: 4
                }} mpCard={{ ph: 5, mh: 5 }}
                onPressCard={() => {
                    navigation.navigate("PropertyDetail")
                }}
            >
                <View style={{
                    flexDirection: "row"
                }} >
                    <Img
                        imgSrc={{ uri: AppImages.property_image }}
                        height={140}
                        width={160}
                        imgStyle={{ borderRadius: 2 }}
                    />
                    <View style={{
                        paddingLeft: 15
                    }} >
                        <Label labelSize={20}>$ 28,800</Label>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 5
                        }} >
                            <Label
                                labelSize={18} labelStyle={{ color: "grey" }}  >1 BHK Flat</Label>
                            <Label labelSize={18} > 97 sqft</Label>
                        </View>
                        <Label labelSize={14}
                            labelStyle={{ maxWidth: "90%", color: "grey" }}
                            mpLabelStyle={{ mt: 10 }}
                            numberOfLines={3} >Nikol, Ahmedabad</Label>
                    </View>
                </View>
                {/* <View style={{
                    height: 50,
                    justifyContent: "center",
                    // borderTopWidth: 1,
                    // borderTopColor: "lightgrey",
                    alignItems: "center",
                    position:"absolute",
                    bottom:0,
                    right:15
                    // bottom:100
                }} > */}
                <Btn
                    btnContainerStyle={{
                        backgroundColor: PrimaryColor,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 30,
                        borderWidth: 0,
                        position: "absolute",
                        bottom: 10,
                        right: 15
                    }}
                    btnHeight={35}
                    label="Contact"
                    labelSize={14}
                    btnWidth={100}
                />
                {/* </View> */}
            </CardView>
        )
    }

    return (
        <MainContainer>
            <FlatList
                data={PropertyList}
                renderItem={_renderProperyListData}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={{ marginVertical: 5 }} />}
                ListHeaderComponent={() => <View style={{ marginTop: 10 }} />}
                ListFooterComponent={() => <View style={{ marginBottom: 10 }} />}
                showsVerticalScrollIndicator={false}
            />
        </MainContainer>
    )
}
export default SavedScreen