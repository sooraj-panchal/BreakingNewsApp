import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { DarkBlueColor } from '../../../assets/colors'
import Container from '../../../components/Container'
import Label from '../../../components/Label'
import MainContainer from '../../../components/MainContainer'
import TextInputComp from '../../../components/TextInputComp'
import { user_id } from '../../../utils/globals'
import MessagesList from './ChatList'
import moment from 'moment'
import Pusher from 'pusher-js/react-native';

function ChatDetailScreen({
    chatDataWatcher,
    chatDataResponse,
    sendMessageeResponse,
    sendMessageWatcher
}) {
    const [message, setMessage] = useState("")
    const [messageArray, setMessageArray] = useState([])
    const [NewDataLoading, setNewDataLoading] = useState(true)
    const [offset, setOffset] = useState(1);
    const [getChatDataLoading, setGetChatDataLoading] = useState(true)

    useEffect(() => {
        getMessages()
        return () => {
            chatDataWatcher(null)
        }
    }, [])

    useEffect(() => {
        var pusherClient = new Pusher('c9951c27017334b0d079', {
            cluster: 'ap2'
        });
        var channel = pusherClient.subscribe(`user-id-${user_id}`);
        channel.bind(`user-id-${user_id}`, data => {
            setMessageArray(arr => [{ ...data }, ...arr])
        });
    }, [])

    const getMessages = () => {
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
                        flex: 0.85,
                        height: null,
                        borderWidth: 0.8,
                        borderColor: "lightgrey",
                        maxHeight: 300,
                    }}
                    inputStyle={{
                        fontSize: 15,
                        flex: 0.95,
                    }}
                    mpInputContainer={{ pl: 10,pv:15}}
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
            const messageDay = moment(el.created_at).format('LL');
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
            (x, y) => moment(y, 'LL').unix() - moment(x, 'LL').unix()
        );

        const items = sortedDays.reduce((acc, date) => {
            const sortedMessages = days[date].sort(
                (x, y) => new Date(x.created_at) - new Date(x.created_at)
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
        </MainContainer>
    )
}

export default ChatDetailScreen
