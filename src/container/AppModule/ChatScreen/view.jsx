import React, { useState, useEffect } from 'react'
import { FlatList, Text } from 'react-native'
import { GrayColor } from '../../../assets/colors'
import Container from '../../../components/Container'
import Img from '../../../components/Img'
import Label from '../../../components/Label'
import MainContainer from '../../../components/MainContainer'

const ChatList = ({
    item,
    index,
    navigation
}) => {
    return (
        <Container
            containerStyle={{
                backgroundColor: "white",
                justifyContent: "center",
            }}
            height={95}
            onPressCard={() => {
                navigation.navigate("ChatDetail", {
                    name: "John Williams"
                })
                // navigation.navigate('ChatStack', { screen: 'ChatDetail' });
            }}
        >
            <Container containerStyle={{
                flexDirection: "row",
                alignItems: "center"
            }} mpContainer={{ pl: 10 }} >
                <Img
                    imgStyle={{
                        borderRadius: 100
                    }}
                    width={70}
                    height={70}
                    imgSrc={{ uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
                />
                <Container
                    mpContainer={{ pl: 15 }}
                >
                    <Label labelStyle={{
                        fontWeight: "bold"
                    }}
                        labelSize={16}
                    >John Williams</Label>
                    <Label labelStyle={{
                        maxWidth: "80%",
                        // backgroundColor:"red"
                    }}
                        maxLength={1}
                        mpLabelStyle={{ pt: 2 }}
                        labelSize={14}
                        numberOfLines={2}
                    >Hello John Williams, how are you?</Label>
                </Container>
            </Container>
            <Label labelStyle={{
                color: GrayColor,
                position: "absolute",
                right: 10,
                top: 25
            }}
                labelSize={14}
            >2 hr ago</Label>
        </Container>
    )
}

function ChatScreen({
    navigation,
    route
}) {
    const Devider = () => {
        return (
            <Container containerStyle={{ borderBottomWidth: 1, borderBottomColor: "lightgrey" }} />
        )
    }
    return (
        <MainContainer>
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return <ChatList
                        item={item}
                        index={index}
                        navigation={navigation}
                    />
                }}
                ItemSeparatorComponent={() => { return Devider() }}
            />
        </MainContainer>
    )
}

export default ChatScreen