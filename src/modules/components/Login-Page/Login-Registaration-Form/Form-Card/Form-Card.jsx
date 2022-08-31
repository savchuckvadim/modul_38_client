import { Navigate, NavLink } from 'react-router-dom'
import style from './Form-Card.module.css'
import Form from './Form/Form'
import { reset } from 'redux-form'
import { LightLoadingPageContainer } from '../../../Elements/Loading/Light-Loading-Page-Container'
const FormCard = (props) => {
    let type = props.type
    const onSubmit = (values, dispatch) => {
        
        switch (props.type) {
            case 'login':
                
                props.login(values.email, values.password, true)
                props.error && dispatch(reset('login'))
                return props.error && <Navigate replace to='/homePage' />

            case 'registration':

                props.setNewUser(values.name, values.surname, values.email, values.password, values.repeatPassword, values.role)
                dispatch(reset('login'))
                return null;

            case 'addUser':

                props.createNewUser(values.name, values.surname, values.email, values.password, values.repeatPassword, values.role)
                dispatch(reset('login'))
                return null;
            default:
                return null;
        }

    }

    if (props.isAuth) { return <Navigate replace to='../profile' /> }
    if (props.inProgress) { return <LightLoadingPageContainer /> }
    if (props.type === 'addUser') {
        return (
            <>
                {/* <Title title={'Add User'} /> */}

                <div className={style.wrapper}>

                    <div className={style.form__title}>
                        <p>{props.error
                            ? <span className={style.error}>{props.error}</span>
                            : props.instruction}</p>
                    </div>

                    <div className={style.form__container}>


                        <Form {...props} onSubmit={onSubmit} />


                    </div>
                </div>
            </>
        )
    }
    return (
        <div className={style.wrapper}>

            <div className={style.form__title}>
                <h1>
                    {props.title}
                </h1>
                <p>{props.error
                    ? <span className={style.error}>{props.error}</span>
                    : props.instruction}</p>
            </div>

            <div className={style.form__container}>

                {/* <RegistartionReduxForm onSubmit={submit}/> */}
                {/* <LoginReduxForm onSubmit={submit}/> */}
                <Form {...props} onSubmit={onSubmit} />

                <div className={style.form__footer}>
                    <div className={style.description}>
                        {type === 'registration'
                            ? props.privacy
                            : <NavLink className={style.link} to={`../registration`} activeclassname='active'>{props.forgotLink}</NavLink>
                        }
                        {/* By pressing Sign Up, you agree to the Terms of Service and Privacy Policy. */}
                    </div>
                    <div className={style.line__wrapper}>
                        <hr className={style.line} ></hr>
                    </div>
                    <div className={style.link__container}>
                        <p className={style.footer__text}>
                            {props.footerInstruction}
                            <NavLink className={style.link} replace to={`../login`} activeclassname='active'>
                                {props.footerLink}
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormCard 