import React from "react"
import Filter from "../../../Elements/Filter/Filter"
import Title from "../../../Elements/Title/Title"
import './Finance.module.css'
import style from "./Finance.module.css"
import BasicTable from "./Table/Table"
import FilterButtons from "../../../Elements/Filter/Filter-Buttons/Filter-Buttons"


const Finance = (props) => {

const filterActions = ['day', 'month', 'year'];

    return (
        <>
            <Title title={'Finance'} />
            <Filter>
                <FilterButtons actions={filterActions} filter={props.getFinance} />
            </Filter>
            <div key={'finance'} className={style.table__wrapper}>
                <BasicTable key={'finance-table'} {...props} />
            </div>


        </>

    );

};

export default Finance;