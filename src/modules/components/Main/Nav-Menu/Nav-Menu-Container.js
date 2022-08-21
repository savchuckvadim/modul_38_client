import { connect } from "react-redux"
import NavMenu from "./Nav-Menu"

const mapStateToProps = (state) => {

   

    return {
        items: state.navMenu,
        authUser:state.auth.authUser

    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu)
