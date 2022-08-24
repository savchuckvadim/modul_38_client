import React from "react"
import Filter from "../../../Elements/Filter/Filter"
import Title from "../../../Elements/Title/Title"
import './Finance.module.css'
import style from "./Finance.module.css"
import TableContainer from "./Table/Table-Container"
import Period from "./Period/Period"
import BasicTable from "./Table/Table"






const Finance = (props) => {



    return (
        <>
            <Title title={'Finance'} />
            <Filter>
                <Period getFinance={props.getFinance} />
            </Filter>
            <div className={style.table__wrapper}>
                <BasicTable {...props} />
            </div>


        </>

    )

}

export default Finance