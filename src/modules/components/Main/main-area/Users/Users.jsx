
import React from "react";
import Filter from "../../../Elements/Filter/Filter";
import FilterButtons from "../../../Elements/Filter/Filter-Buttons/Filter-Buttons";
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container";
import Title from "../../../Elements/Title/Title";

import Paginator from "../../../Elements//Paginator/Paginator";
import UserCard from "./User-Card";
import style from './Users.module.css'
import { NavLink } from "react-router-dom"

const Users = (props) => {

    const filterActions = ['+Add User'];
  

    let loader = <LightLoadingPageContainer />
    let users =
        
        <>
            <Title title={'People'} />

            <Filter >
                {/* <AddUserButton /> */}
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
                    totalItemsCount={props.totalUsersCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onPageChanged={props.onPageChanged}
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