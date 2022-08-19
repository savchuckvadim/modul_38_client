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
        finance: state.finance.finance
    }
}
const TableContainer = (props) => {

    useEffect(() => {
        props.getFinance()
    }, [])
debugger
    return <BasicTable finance={props.finance}/>
}
export default TableContainer = connect(mapStateToProps, {
    getFinance
})(TableContainer)