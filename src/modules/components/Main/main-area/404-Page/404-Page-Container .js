import { connect } from "react-redux"
import NotFound from "./404-Page"



const mapStateToProps = (state) => {
    let theme = state.theme
    let style = {
        backgroundColor: theme.beige,
        logo: theme.logo,
        color: theme.darkGrey
    }
    return {
        style: style
    }
}

export const NotFoundContainer = connect(mapStateToProps)(NotFound)