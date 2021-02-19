import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import Animated from "react-native-reanimated";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import Btn from "../../../components/Btn";
import CardView from "../../../components/CardView";
import Img from "../../../components/Img";
import Label from "../../../components/Label";
import MainContainer from "../../../components/MainContainer";
import TextInputComp from "../../../components/TextInputComp";
import Greeting from "../ProfileScreen/view";


const HomeScreen = ({
    navigation
}) => {

    return (
        <MainContainer>
            <ScrollView
            >
                <TextInputComp
                    mpInputContainer={{ mt: 5, mh: 5 }}
                    mpInput={{ pl: 10 }}
                />
                <TextInputComp
                    mpInputContainer={{ mt: 5, mh: 5 }}
                    mpInput={{ pl: 10 }}
                />
                <Label
                    labelSize={40}
                    labelStyle={{
                        fontWeight: "bold"
                    }}
                    mpLabelStyle={{ mh: 10, mt: 10 }}
                >Hello World</Label>
                <CardView
                    height={200}
                    // width={100}
                    cardStyle={{
                        backgroundColor: "white",
                    }}
                    mpCard={{ mt: 10, mh: 10 }}
                >
                    <Label
                        labelSize={20}
                        mpLabelStyle={{ mh: 10, mt: 10 }}
                    >Hello Good Morning</Label>
                </CardView>
                <Img
                    imgSrc={{ uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" }}
                    mpImage={{ mh: 30, mv: 15 }}
                    width={200}
                    height={200}
                    imgStyle={{ borderRadius: 100 }}
                />
                <Btn
                    mpBtnContainer={{ mt: 5, mh: 5 }}
                    label="Submit"
                    labelSize={20}
                />
                <Btn
                    mpBtnContainer={{ mt: 5, mh: 5 }}
                    label="Submit"
                    labelSize={20}
                    onPressBtn={() => {
                        var obj = new Greeting();
                        obj.greet();
                    }}
                />
                <CardView
                    height={200}
                    // width={100}
                    cardStyle={{
                        backgroundColor: "white",
                    }}
                    mpCard={{ mt: 10, mh: 10 }}
                >
                    <Label
                        labelSize={20}
                        mpLabelStyle={{ mh: 10, mt: 10 }}
                    >Hello Good Morning</Label>
                </CardView>
                <Img
                    imgSrc={{ uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" }}
                    mpImage={{ mh: 30, mv: 15 }}
                    width={200}
                    height={200}
                    imgStyle={{ borderRadius: 100 }}
                />
                <Btn
                    mpBtnContainer={{ mt: 5, mh: 5 }}
                    label="Submit"
                    labelSize={20}
                />
                <Btn
                    mpBtnContainer={{ mt: 5, mh: 5 }}
                    label="Submit"
                    labelSize={20}
                    onPressBtn={() => {
                        var obj = new Greeting();
                        obj.greet();
                    }}
                />
                <CardView
                    height={200}
                    // width={100}
                    cardStyle={{
                        backgroundColor: "white",
                    }}
                    mpCard={{ mt: 10, mh: 10 }}
                >
                    <Label
                        labelSize={20}
                        mpLabelStyle={{ mh: 10, mt: 10 }}
                    >Hello Good Morning</Label>
                </CardView>
                <Img
                    imgSrc={{ uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" }}
                    mpImage={{ mh: 30, mv: 15 }}
                    width={200}
                    height={200}
                    imgStyle={{ borderRadius: 100 }}
                />
                <Btn
                    mpBtnContainer={{ mt: 5, mh: 5 }}
                    label="Submit"
                    labelSize={20}
                />
                <Btn
                    mpBtnContainer={{ mt: 5, mh: 5 }}
                    label="Submit"
                    labelSize={20}
                    onPressBtn={() => {
                        var obj = new Greeting();
                        obj.greet();
                    }}
                />
                <CardView
                    height={200}
                    // width={100}
                    cardStyle={{
                        backgroundColor: "white",
                    }}
                    mpCard={{ mt: 10, mh: 10 }}
                >
                    <Label
                        labelSize={20}
                        mpLabelStyle={{ mh: 10, mt: 10 }}
                    >Hello Good Morning</Label>
                </CardView>
                <Img
                    imgSrc={{ uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" }}
                    mpImage={{ mh: 30, mv: 15 }}
                    width={200}
                    height={200}
                    imgStyle={{ borderRadius: 100 }}
                />
                <Btn
                    mpBtnContainer={{ mt: 5, mh: 5 }}
                    label="Submit"
                    labelSize={20}
                />
                <Btn
                    mpBtnContainer={{ mt: 5, mh: 5 }}
                    label="Submit"
                    labelSize={20}
                    onPressBtn={() => {
                        var obj = new Greeting();
                        obj.greet();
                    }}
                />
            </ScrollView>
        </MainContainer>
    )
}

export default HomeScreen;