
import React, { useEffect } from "react";
import Filter from "../../../Elements/Filter/Filter";
import FilterButtons from "../../../Elements/Filter/Filter-Buttons/Filter-Buttons";
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container";
import Title from "../../../Elements/Title/Title";
import Paginator from '../../../Elements/Paginator/Paginator';
import style from './Master.module.css'

import Offers from "./Offers/Offers";


const Master = (props) => {

    const getOffers = () => {
        props.getOffers(props.currentPage, props.pageSize)
    };

    const onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.getOffers(pageNumber, props.pageSize);
    }
    const filterActions = ['my', 'not my', 'all'];

    useEffect(() => {
        window.scrollTo(0, 0);
        getOffers();
    }, []);



    let loader = <LightLoadingPageContainer />
    let users =
        <>
            <Title title={'Offers'} />
            <Filter>
                <FilterButtons actions={filterActions} filter={props.filterOffers} />
            </Filter>
            <div className={style.container}>
                {<Offers {...props} />}
            </div>

            <div className={style.pages}>

                <Paginator
                    totalItemsCount={props.totalItemsCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onPageChanged={onPageChanged}
                    portionSize={props.portionSize}
                />
            </div>

        </>
    return (
        <>
            {props.isFetching ? loader : users}
        </>
    )


}




export default Master;