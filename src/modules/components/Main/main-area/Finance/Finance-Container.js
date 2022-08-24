
import {connect} from "react-redux"
import { getFinance } from "../../../../redux/reducers/finance/finance-reducer"
import Finance from "./Finance"



const mapStateToProps = (state) => {

    return {
        authUser: state.auth.authUser,
        finance: state.finance
    }
}

export const FinanceContainer = connect(mapStateToProps, {
    getFinance
})(Finance)