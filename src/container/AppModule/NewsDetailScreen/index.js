import { connect } from "react-redux";
import { getArticleDetailsWatcher, updateNotificationWatcher } from "../../../store/actions";
import { getArticleDetailsSelector, getArticleDetailsLoading } from "../../../store/selectors";
import NewsDetailScreen from "./view";

const mapStateToProps = store => {
    return {
        getArticleDetailsResponse:getArticleDetailsSelector(store),
        getArticleDetailsLoading:getArticleDetailsLoading(store),
    }
}

const mapDispatchToProps = {
  getArticleDetailsWatcher,
  updateNotificationWatcher
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetailScreen);