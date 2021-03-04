import HomeScreen from "./view";
import { connect } from "react-redux";
import { asyncUserDataWatcher, getArticleListWatcher, getTrandingImageListWatcher } from "../../../store/actions";
import { asyncUserDataSelector, getArticeListLoading, getArticeListSelector, getTrandingImageListLoading, getTrandingImageListSelector } from "../../../store/selectors";
const mapStateToProps = store => {
    return {
        // verifyOtpLoading: verifyOtpLoading(store),
        // verifyOtpResponse: verifyOtpSelector(store)
        asyncUserDataResponse:asyncUserDataSelector(store),
        getArticeListResponse:getArticeListSelector(store),
        getArticeListLoading:getArticeListLoading(store),
        getTrandingImageListResponse:getTrandingImageListSelector(store),
        getTrandingImageListLoading:getTrandingImageListLoading(store),
    }
}

const mapDispatchToProps = {
    asyncUserDataWatcher,
   getArticleListWatcher,
   getTrandingImageListWatcher
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);