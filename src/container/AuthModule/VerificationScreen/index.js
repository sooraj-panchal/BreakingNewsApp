import { connect } from "react-redux";
import { asyncBuyerDataWatcher, verifyOtpSuccess, verifyOtpWatcher } from "../../../store/actions";
import { verifyOtpLoading, verifyOtpSelector } from "../../../store/selectors";
import VerificationScreen from "./view";

const mapStateToProps = store => {
    return {
        verifyOtpLoading: verifyOtpLoading(store),
        verifyOtpResponse: verifyOtpSelector(store)
    }
}

const mapDispatchToProps = {
    verifyOtpWatcher,
    verifyOtpSuccess,
    asyncBuyerDataWatcher
};

export default connect(mapStateToProps, mapDispatchToProps)(VerificationScreen);