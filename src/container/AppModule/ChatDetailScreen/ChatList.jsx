import React, { useState } from 'react'
import { GrayColor } from '../../../assets/colors'
import Container from '../../../components/Container'
import Label from '../../../components/Label'
const MessagesList = ({
    adminMsg,
    userMsg,
    userId,
    timeStamp,
}) => {
    // console.log(message)
    const msg = adminMsg ? adminMsg : userMsg
    if (adminMsg) {
        return (
            <Container containerStyle={{
                backgroundColor: "#f3f3f3",
                elevation: 1,
                minHeight: 40,
                maxWidth: "80%",
                alignItems: "flex-start",
                borderRadius: 5,
                alignSelf: 'flex-start',
                minWidth: 100
            }} mpContainer={{ ml: 10, pl: 5, pr: 10, pt: 5 }}
            >
                <Label
                    labelSize={14}
                    labelStyle={{
                        maxWidth: "90%"
                    }}
                >{msg}</Label>
                <Label
                    labelStyle={{
                        textAlign: "right",
                        color: GrayColor,
                        alignSelf: 'flex-end',
                    }}
                    labelSize={10}
                    mpLabelStyle={{ mb: 2 }}
                >{timeStamp}</Label>
            </Container>
        )
    }
    return (
        <Container containerStyle={{
            backgroundColor: "#f3f3f3",
            elevation: 1,
            minHeight: 40,
            maxWidth: "80%",
            justifyContent: "center",
            borderRadius: 5,
            alignSelf: 'flex-end',
            minWidth: 100

        }} mpContainer={{ mr: 10, pl: 10, pt: 5, pr: 10 }}
        >
            <Label
                labelSize={14}
                labelStyle={{
                    maxWidth: "90%"
                }}
            >{msg}</Label>
            <Label
                labelStyle={{
                    textAlign: "right",
                    color: GrayColor,
                    alignSelf: 'flex-end',

                }}
                labelSize={9}
                mpLabelStyle={{ mv: 4 }}
            >{timeStamp}</Label>
        </Container>
    )
}
export default MessagesList;
// export default React.memo(MessagesList);