import style from './Login-Page.module.css'
import RegistrationContainer from './Login-Registaration-Form/Registration-Container'

const RegistrationPage = () => {

    return (
        <>
            <div className={style.page__container}>
                <div className={style.form__wrapper}>
                    <RegistrationContainer />
                </div>
            </div>
        </>
    )
}

export default RegistrationPage