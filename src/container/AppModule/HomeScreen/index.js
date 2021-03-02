import HomeScreen from "./view";
import { connect } from "react-redux";
import { asyncUserDataWatcher, getArticleListWatcher } from "../../../store/actions";
import { asyncUserDataSelector, getArticeListLoading, getArticeListSelector } from "../../../store/selectors";
const mapStateToProps = store => {
    return {
        // verifyOtpLoading: verifyOtpLoading(store),
        // verifyOtpResponse: verifyOtpSelector(store)
        asyncUserDataResponse:asyncUserDataSelector(store),
        getArticeListResponse:getArticeListSelector(store),
        getArticeListLoading:getArticeListLoading(store),
    }
}

const mapDispatchToProps = {
    asyncUserDataWatcher,
   getArticleListWatcher
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);