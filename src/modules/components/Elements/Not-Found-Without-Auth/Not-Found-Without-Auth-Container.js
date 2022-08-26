import { connect } from "react-redux"
import NotFoundWithoutAuth from "./Not-Found-Without-Auth"


const mapStateToProps = (state) => {
    let theme = state.theme
    let style = {
        backgroundColor: theme.black,
        logo: theme.logo,
        
    }
    return {
        style: style,
        type: 'dark'
    }
}

export const NotFoundWithoutAuthContainer = connect(mapStateToProps)(NotFoundWithoutAuth)