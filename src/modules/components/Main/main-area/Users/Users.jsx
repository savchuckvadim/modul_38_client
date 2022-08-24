
import React from "react";
import Filter from "../../../Elements/Filter/Filter";
import { LightLoadingPageContainer } from "../../../Elements/Loading/Light-Loading-Page-Container";
import Title from "../../../Elements/Title/Title";
import AddUserButton from "./Add-User/Add-User-Button";
import Paginator from "./Paginator/Paginator";
import UserCard from "./User-Card";
import style from './Users.module.css'


const Users = (props) => {
    
    // let isFetching = false
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let loader = <LightLoadingPageContainer />
    let users =
        <>
            
            <Title title={'People'} />
            <Filter ><AddUserButton/></Filter>
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
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}

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