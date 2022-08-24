
import { connect } from "react-redux"
import { getFish } from "../../../../redux/reducers/home/home-reducer";
import HomePage from "./Home-Page"

const mapStateToProps = (state) => {

    return {
        user: state.auth.authUser,
        fish: state.home.fish
    }
};

export const HomePageContainer = connect(mapStateToProps, {
    getFish
})(HomePage);