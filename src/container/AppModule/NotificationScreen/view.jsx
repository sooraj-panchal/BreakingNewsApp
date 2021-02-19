import React from "react";
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

function NotificationScreen({
    navigation
}) {
    // const Search = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

    const NotificatinList = ({
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
            // onPressCard={() => {
            //     navigation.navigate("PropertyDetail")
            // }}
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


    return (
        <MainContainer style={{ backgroundColor: "white" }} >
            <FlatList
                data={NewsArray}
                renderItem={({ item, index }) => {
                    return <NotificatinList
                        imgSrc={item.image}
                        title="Main Title"
                        description="Loream ipsulm dummy text, Loream ipsulm dummy text"
                        time="2 hr ago"
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