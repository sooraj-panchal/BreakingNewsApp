import LoginScreen from "./view";
import { connect } from 'react-redux';
import { loginLoading, loginSelector, saveUserDataSelector } from "../../../store/selectors";
import { asyncUserDataWatcher, loginSuccess, loginWatcher, SaveUserDataWatcher } from "../../../store/actions";


const mapStateToProps = store => {
    return {
        loginResponse: loginSelector(store),
        loginLoading: loginLoading(store),
        SaveUserDataReasponse: saveUserDataSelector(store)
    }
}

const mapDispatchToProps = {
    loginWatcher,
    loginSuccess,
    asyncUserDataWatcher,
    SaveUserDataWatcher
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)