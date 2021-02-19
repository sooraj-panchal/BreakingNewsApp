import React from 'react'
import CardView from "./CardView"
import Ionicons from 'react-native-vector-icons/Ionicons'
const Header = ({ navigation, headerStyle }) => {
    return (

        <CardView
            cardStyle={[{
                // elevation: 2,
                // // borderRadius: 40,
                // shadowOffset: { width: 2, height: 2 },
                // shadowRadius: 2,
                // shadowOpacity: 0.3,
                backgroundColor: null,
                elevation: 0
                ,
                // justifyContent: "center",
                // alignItems: "center",
            }, headerStyle]}
            width={30}
            height={30}
            mpCard={{ ml: 10, mt: 15 }}
            onPressCard={() => navigation.goBack()}
        >
            <Ionicons
                name="md-chevron-back"
                size={30}
                color="black"
            />
        </CardView>
    )
}
export default Header
