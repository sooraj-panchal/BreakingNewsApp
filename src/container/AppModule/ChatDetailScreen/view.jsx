import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Linking, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { DarkBlueColor, GrayColor } from '../../../assets/colors'
import Container from '../../../components/Container'
import Label from '../../../components/Label'
import MainContainer from '../../../components/MainContainer'
import TextInputComp from '../../../components/TextInputComp'
import { chatDataSaga } from '../../../store/sagas/homeSaga'
import { user_id } from '../../../utils/globals'
import MessagesList from './ChatList'
import moment from 'moment'
import Img from '../../../components/Img'
import { AppImages } from '../../../assets/images/map'

const data = [
    {
        id: "1",
        userId: "0",
        message: "hello Sooraj, How Are you what are you doing",
        timeStamp: "08:20 PM"
    },
    {
        id: "2",
        userId: "1",
        message: "hello panchal, what are you doing",
        timeStamp: "08:20 PM"
    },
    {
        id: "3",
        userId: "0",
        message: "what are you doing",
        timeStamp: "08:20 PM"
    },
    {
        id: "4",
        userId: "1",
        message: "how are you",
        timeStamp: "08:20 PM"
    }
]



function ChatDetailScreen({
    navigation,
    route,
    chatDataWatcher,
    chatDataResponse,
    chatDataLoading,
    sendMessageeResponse,
    sendMessageLoading,
    sendMessageWatcher
}) {
    const [message, setMessage] = useState("")
    const [messageArray, setMessageArray] = useState([])
    const [NewDataLoading, setNewDataLoading] = useState(true)
    const [offset, setOffset] = useState(1);
    const [getChatDataLoading, setGetChatDataLoading] = useState(true)

    useEffect(() => {
        // "created_at": "2021-02-23T10:45:33.000000Z",

        // var now = new Date().toLocaleTimeString();
        getMessages()
        return () => {
            chatDataWatcher(null)
        }
    }, [])

    const getMessages = () => {
        // setGetChatDataLoading(true)
        let formData = new FormData()
        formData.append("sort", "id")
        formData.append("order", "desc")
        formData.append("limit", "15")
        formData.append("page", offset)
        chatDataWatcher(formData)
    }
    useEffect(() => {
        if (chatDataResponse) {
            setNewDataLoading(false)
            // alert(chatDataResponse?.data?.length)
            if (chatDataResponse?.data?.length) {
                setOffset(offset + 1);
                setMessageArray(arr => [...arr, ...chatDataResponse?.data])
            }
            setGetChatDataLoading(false)
        }
    }, [chatDataResponse])

    useEffect(() => {
        if (sendMessageeResponse) {
            console.log(sendMessageeResponse)
        }
    }, [sendMessageeResponse])

    const onSendMessage = () => {
        // var date = new Date()
        // var hours = date.getHours() % 12
        // var minute = date.getMinutes()
        // var hourss = date.getHours()
        // var ampm = hourss >= 12 ? 'PM' : 'AM';
        // let currentTime = hours + ':' + minute + ' ' + ampm
        // alert(currentTime)
        setMessageArray(arr => [{
            "msg": message,
            "admin_msg": null,
            "time": moment(new Date()).format('LT')
        }, ...arr]);
        setMessage("")
        let formData = new FormData()
        formData.append("msg", message)
        sendMessageWatcher(formData)
    }
    const MessageContainer = () => {
        return (
            <Container
                containerStyle={{
                    backgroundColor: "#f2f2f2",
                    position: "absolute",
                    width: "100%",
                    bottom: 0,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
                mpContainer={{ ph: 10, pv: 10 }}
            >
                <TextInputComp
                    inputContainerStyle={{
                        backgroundColor: "white",
                        borderRadius: 30,
                        fontSize: 15,
                        // paddingRight: 0,
                        flex: 0.85,
                        height: null,
                        // elevation: 1,
                        borderWidth: 0.8,
                        borderColor: "lightgrey",
                        maxHeight: 300,
                    }}
                    inputStyle={{
                        fontSize: 15,
                        flex: 0.95
                    }}
                    mpInputContainer={{ pl: 10 }}
                    placeholder="Type a Message  |"
                    multiline={true}
                    editable={true}
                    value={message}
                    onChangeText={(value) => setMessage(value)}
                />
                <Container containerStyle={{
                    backgroundColor: DarkBlueColor,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: 'center',
                    position: "absolute",
                    right: 10,
                    bottom: 40 / 3
                }}
                    width={40}
                    height={40}
                    mpContainer={{ pl: 3 }}
                    onPressCard={onSendMessage}
                >
                    <Ionicons
                        name="md-send"
                        size={20}
                        color="white"
                    />
                </Container>
            </Container>
        )
    }
    function groupedDays(messages) {
        return messages.reduce((acc, el, i) => {
            // console.log("acc",acc)
            const messageDay = moment(el.created_at).format('YYYY-MM-DD');
            if (acc[messageDay]) {
                return { ...acc, [messageDay]: acc[messageDay].concat([el]) };
            }
            return { ...acc, [messageDay]: [el] };
        }, {});
    }
    function generateItems(messages) {
        // console.log("messages", messages)
        const days = groupedDays(messages);
        // console.log(days)
        const sortedDays = Object.keys(days).sort(
            (x, y) => moment(y, 'YYYY-MM-DD').unix() - moment(x, 'YYYY-MM-DD').unix()
        );

        const items = sortedDays.reduce((acc, date) => {
            const sortedMessages = days[date].sort(
                (x, y) => new Date(y.created_at) - new Date(x.created_at)
            );
            return acc.concat([...sortedMessages, { type: 'day', date, id: date }]);
        }, []);
        return items;
    }
    return (
        <MainContainer
            style={{ backgroundColor: "white" }}
            loading={getChatDataLoading}
        >
            <FlatList inverted
                data={generateItems(messageArray)}
                extraData={generateItems(messageArray)}
                renderItem={({ item, index }) => {
                    if (item.type && item.type === 'day') {
                        return <Container containerStyle={{
                            justifyContent: "center",
                            alignItems: 'center',
                            backgroundColor: "#f0f0f0",
                            elevation: 0.3,
                            width: 120,
                            alignSelf: "center",
                            borderRadius: 5,
                            height: 25
                        }} mpContainer={{ mv: 10 }} >
                            <Label
                                labelSize={12}
                                labelStyle={{ color: "gray", letterSpacing: 1 }}

                            >{item.date}</Label>
                        </Container>
                    }
                    return <MessagesList
                        userId={item.id}
                        adminMsg={item.admin_msg}
                        userMsg={item.msg}
                        timeStamp={moment(item.created_at).format('LT')}
                    />
                }}
                style={{ flex: 1 }}
                keyExtractor={(_, index) => index.toString()}
                ListHeaderComponent={() => <Container mpContainer={{ mt: 100 }} />}
                ItemSeparatorComponent={() => {
                    return (
                        <Container
                            mpContainer={{ mv: 5 }}
                        // containerStyle={{
                        //     backgroundColor: "#f5f5f5",
                        //     height: 30,
                        //     width: "40%",
                        //     borderRadius: 100,
                        //     alignSelf: "center",
                        //     justifyContent: "center",
                        //     alignItems: "center"
                        // }}
                        >
                            {/* <Label labelSize={12} >FEBRUARY 20, 2021</Label> */}
                        </Container>
                    )
                }
                }
                ListFooterComponent={() => {
                    return (
                        <View style={{
                            height: 100,
                            justifyContent: "center",
                            alignItems: "center",
                        }} >
                            {NewDataLoading &&
                                <ActivityIndicator
                                    size="large"
                                    color="black"
                                />
                            }
                        </View>
                    )
                }}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.2}
                onEndReached={() => {
                    if (messageArray.length >= 10) {
                        setNewDataLoading(true)
                        getMessages()
                    }
                }}
            />
            {MessageContainer()}
            <Img
                withContainer
                containerStyle={{
                    position: "absolute",
                    right: 15,
                    bottom: 100,
                    // top:-20,
                    // zIndex: 100
                }}
                imgSrc={AppImages.whatsAppImage}
                width={50}
                height={50}
                onPress={() => {
                    let url =
                        "whatsapp://send?text=" +
                        "" +
                        "&phone=91" +
                        9723271763;
                    Linking.openURL(url)
                        .then(data => {
                            console.log("WhatsApp Opened successfully " + data);
                        })
                        .catch(() => {
                            alert("Make sure WhatsApp installed on your device");
                        });
                    // navigation.push("ChatDetail")
                }}
            />
        </MainContainer>
    )
}

export default ChatDetailScreen