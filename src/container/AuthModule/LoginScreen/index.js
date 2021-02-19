import LoginScreen from "./view";
import { connect } from 'react-redux';
import { loginLoading, loginSelector } from "../../../store/selectors";
import { asyncBuyerDataWatcher, loginSuccess, loginWatcher } from "../../../store/actions";


const mapStateToProps = store => {
    return {
        loginResponse: loginSelector(store),
        loginLoading: loginLoading(store),
    }
}

const mapDispatchToProps = {
    loginWatcher,
    loginSuccess,
    asyncBuyerDataWatcher,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)