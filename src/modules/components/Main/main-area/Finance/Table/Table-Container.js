import {useEffect} from "react"
import {
    connect
} from "react-redux"
import {
    getFinance
} from "../../../../../redux/reducers/finance/finance-reducer"
import BasicTable from "./Table"


const mapStateToProps = (state) => {

    return {
        authUser: state.auth.authUser,
        finance: state.finance
    }
}
let TableContainer = (props) => {

   
    return <BasicTable {...props}/>
}
export default TableContainer = connect(mapStateToProps, {
    getFinance
})(TableContainer)