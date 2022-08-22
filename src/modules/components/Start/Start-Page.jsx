import style from './Start-Page.module.css'
import redLogo from '../../../assets/imgs/logo.svg'
import RedButton from '../Elements/Button/Red-Button'
import WhiteButton from '../Elements/Button/White-Button'
import { Navigate, NavLink } from 'react-router-dom'
import { Route, Routes } from "react-router-dom"
import LoginPage from '../Login-Page/Login-Page'

import RegistrationPage from '../Login-Page/Registration-Page'


const Start = () => {

  
    return (

        <div className={style.start__page}

        >
            {/* <Background dark={true} /> */}
            <div className={style.wrapper} >
                <div className={style.logo__wrapper}>
                    <img className={style.redLogo} src={redLogo} alt='img-logo' />
                    {/* <img className={style.inscriptionLogog} src={inscriptionLogog} alt='inscription-logo' /> */}
                    <h1>Skillfactory</h1>
                </div>

                <div>
                    <div className={style.slogan__wrapper}>
                        <h1 className={style.slogan__title}>Become a Modul_38</h1>
                        {/* <p className={style.slogan__text}> and give a shit at all</p> */}
                    </div>

                    <div className={style.buttons__wrapper}>

                        <div className={style.button__wrapper}>
                            <NavLink className={style.button__link} to='../login'>
                                <RedButton border={16} name={'Login'} />
                            </NavLink>
                        </div>
                        <div className={style.button__wrapper}>
                        <NavLink className={style.button__link} to='../registration'>
                                <WhiteButton border={16} name={'Registaration'} />
                            </NavLink>
        
                        </div>
                    </div>

                </div>
                <div>
                    <p>© 2022 Modul_38 All rights reserved</p>
                </div>


            </div>


            {/* <img className={style.greyLogo} src={redLogo} alt='img-logo' /> */}

        </div>


    )
}
const StartPage = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="*" index element={<Start />} />
                <Route path="start" element={<Start />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="registration" element={<RegistrationPage />} />
                <Route path="profile" element={<Navigate replace to='../' />} />
            </Routes>

        </>

    )
}

export default StartPage