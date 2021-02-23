import { connect } from "react-redux";
import { asyncUserDataWatcher, verifyOtpSuccess, verifyOtpWatcher } from "../../../store/actions";
import { asyncUserDataSelector, verifyOtpLoading, verifyOtpSelector } from "../../../store/selectors";
import VerificationScreen from "./view";

const mapStateToProps = store => {
    return {
        verifyOtpLoading: verifyOtpLoading(store),
        verifyOtpResponse: verifyOtpSelector(store),
        asyncUserDataResponse:asyncUserDataSelector(store)
    }
}

const mapDispatchToProps = {
    verifyOtpWatcher,
    verifyOtpSuccess,
    asyncUserDataWatcher,
};

export default connect(mapStateToProps, mapDispatchToProps)(VerificationScreen);