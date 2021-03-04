import NotificationScreen from "./view";
import { connect } from "react-redux";
import { getNotificationWatcher } from "../../../store/actions";
import { getNotificationLoading, getNotificationSelector } from "../../../store/selectors";
const mapStateToProps = store => {
    return {
        getNotificationResponse: getNotificationSelector(store),
        getNotificationLoading: getNotificationLoading(store),
    }
}

const mapDispatchToProps = {
    getNotificationWatcher,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationScreen);