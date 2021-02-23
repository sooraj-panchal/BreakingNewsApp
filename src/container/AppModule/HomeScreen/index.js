import HomeScreen from "./view";
import { connect } from "react-redux";
import { asyncUserDataWatcher } from "../../../store/actions";
import { asyncUserDataSelector } from "../../../store/selectors";
const mapStateToProps = store => {
    return {
        // verifyOtpLoading: verifyOtpLoading(store),
        // verifyOtpResponse: verifyOtpSelector(store)
        asyncUserDataResponse:asyncUserDataSelector(store)
    }
}

const mapDispatchToProps = {
    asyncUserDataWatcher
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);