import { connect } from "react-redux"
import LoadingPage from "./Loading-Page"
import LoadingMini from "./Loading-Page-Mini"


const mapStateToProps = (state) => {
    let theme = state.theme
    let style = {
        backgroundColor: theme.beige,
        logo: theme.logo
    }
    return {
        style: style
    }
}

export const LightLoadingMini = connect(mapStateToProps)(LoadingMini)