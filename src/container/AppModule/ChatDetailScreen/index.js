import ChatDetailScreen from "./view";

import { connect } from "react-redux";
import { chatDataLoading, chatDataSelector, sendMessageLoading, sendMessageSelector } from "../../../store/selectors/homeSelector";
import { chatDataWatcher, sendMessageWatcher } from "../../../store/actions/homeAction";
const mapStateToProps = store => {
    return {
        // verifyOtpLoading: verifyOtpLoading(store),
        // verifyOtpResponse: verifyOtpSelector(store)
        chatDataResponse: chatDataSelector(store),
        chatDataLoading: chatDataLoading(store),
        sendMessageLoading: sendMessageLoading(store),
        sendMessageeResponse: sendMessageSelector(store)
    }
}

const mapDispatchToProps = {
    chatDataWatcher,
    sendMessageWatcher
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatDetailScreen);