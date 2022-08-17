import { connect } from "react-redux"
import HomePage from "./Home-Page"

const mapStateToProps = (state) => {

    return {
        user: state.auth.authUser
    }
};

export const HomePageContainer = connect(mapStateToProps)(HomePage);