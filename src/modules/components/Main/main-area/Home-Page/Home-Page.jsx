import { Home } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Title from "../../../Elements/Title/Title";
import style from "./Home-Page.module.css";

const HomePage = (props) => {
    window.scrollTo(0, 0);
    
    useEffect(() => {props.getFish()}, [])
    
    if (props.user) {
        return (
            <>
                <Title title={'Home Page'} />
                
                <h2>Hello, {props.user.name} !</h2>
                <p className={style.description}>
                    {props.fish}
                </p>
            </>
        )
    }
    return (
        <>
            <Title title={'Пользователь не найден !'} />


        </>
    )

};

export default HomePage;