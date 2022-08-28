
import React, { useEffect } from "react";
import Filter from "../../../Elements/Filter/Filter";
import FilterButtons from "../../../Elements/Filter/Filter-Buttons/Filter-Buttons";
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container";
import Title from "../../../Elements/Title/Title";
import Paginator from "../../../Elements//Paginator/Paginator";
import UserCard from "./User-Card/User-Card";
import style from './Users.module.css';
import { NavLink } from "react-router-dom";

const Users = (props) => {

    useEffect(() => {
        props.requestUsers(props.currentPage, props.pageSize)
    }, [])  

    const onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber)
        props.requestUsers(pageNumber, props.pageSize)
    }
    const filterActions = ['+Add User'];


    let loader = <LightLoadingPageContainer />
    let users =

        <>
            <Title title={'People'} />

            <Filter >
                <NavLink className={style.link} to='../addUser'>  <FilterButtons actions={filterActions} filter={null} /></NavLink>
            </Filter>

            <div className={style.container}>
                {props.users.map(user =>
                    <UserCard
                        key={`user-card-${user.id}`}
                        user={user}
                        name={user.name}
                        authUser={props.authUser}
                        deleteUser={props.deleteUser}
                        deletingUser={props.deletingUser}

                    />)}
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




export default Users;