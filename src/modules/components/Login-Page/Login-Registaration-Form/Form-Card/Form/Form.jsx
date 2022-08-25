import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'
import { emailValidate, passwordValidate, required, requiredFields, rolesValidate, symbol } from '../../../../../utils/Validators/validator'
import RedButton from '../../../../Elements/Button/Red-Button'

import style from './Form.module.css'
import { Navigate, NavLink } from 'react-router-dom'
import Input, { Input2 } from './Inputs/Input-Login-Registartion'
import React from 'react'
import InputRoles from './Inputs/Radio-Registartion-Roles'



let Form = (props) => {
    debugger
    if (props.error) {
        props.setError(props.error)
    }


    let inputs = []
    let roles = <Field
        component={InputRoles}
        validate={requiredFields}
        name='role'
        type='role'
        key='role'
    />
    let typeIndex = 0

    if (props.type === 'login') {
        typeIndex = 0
        roles = null
    } else {
        typeIndex = 1
    }
    let validate = null

    inputs = props.fields.map(field => {
        let type = field.name
        if (field.name === 'email') {
            validate = emailValidate
        } else if (field.name === 'password') {
            validate = passwordValidate
        } else if (field.name === 'repeatPassword') {
            validate = passwordValidate
            type = 'password'
        } else {
            validate = requiredFields
        }



        return <Field
            component={Input}
            validate={[validate]}
            name={field.name}
            type={type}
            placeholder={field.placeholder}
            key={field.name}
        />
    }
    )



    return (<>

        <form onSubmit={props.handleSubmit} className={style.inputs__container}>

            {inputs}
            {roles}
            <div className={style.button__container}>
                {/* <NavLink className={style.button__container} to={'../'}>  */}
                <RedButton border={16} name={'НАЖАТЬ'} />
                {/* </NavLink> */}
            </div>

        </form>
    </>

    )
}

export default Form = reduxForm({
    form: 'login'
})(Form)