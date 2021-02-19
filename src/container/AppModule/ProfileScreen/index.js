import { connect } from 'react-redux';
import { registerLoading, registerSelector } from "../../../store/selectors";
import { registerSuccess, registerWatcher } from "../../../store/actions";
import ProfileScreen from "./view";


const mapStateToProps = store => {
    return {
        registerResponse: registerSelector(store),
        registerLoading: registerLoading(store)
    }
}

const mapDispatchToProps = {
    registerWatcher,
    registerSuccess
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)