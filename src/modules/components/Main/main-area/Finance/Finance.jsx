import React from "react"
import Filter from "../../../Elements/Filter/Filter"
import Title from "../../../Elements/Title/Title"
import './Finance.module.css'
import BasicTable from "./Table/Table"
import style from "./Finance.module.css"





const Finance = (props) => {



    return (
        <>
            <Title title={'Finance'} />
            <Filter />
            <div className={style.table__wrapper}>
            <BasicTable />
            </div>
            

        </>

    )

}

export default Finance