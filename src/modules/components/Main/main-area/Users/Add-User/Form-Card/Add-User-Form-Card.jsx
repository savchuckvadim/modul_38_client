import { Navigate, NavLink } from 'react-router-dom'
import Title from '../../../../../Elements/Title/Title'
import style from './Add-User-Form-Card.module.css'
import Form from './Form/Form'

const FormCard = (props) => {
    let type = props.type
    const onSubmit = (values) => {

        switch (props.type) {
            case 'login':

                props.login(values.email, values.password, true)
                return <Navigate replace to='/hbvhk' />

            case 'addUser':

                props.setNewUser(values.name, values.surname, values.email, values.password, values.repeatPassword, values.role)
                break;
            default:
                break;
        }

    }

    if (props.isAuth) { return <Navigate replace to='../profile' /> }
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

export default FormCard 