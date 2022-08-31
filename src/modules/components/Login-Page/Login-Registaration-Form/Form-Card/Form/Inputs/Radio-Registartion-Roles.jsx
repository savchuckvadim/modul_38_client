import style from './Input.module.css';
import React from 'react';
import getLoginRegistrationIcon from '../../../../../../../assets/imgs/login-form/login-registartion-imgs';

const InputRoles = (field) => {

    let index = 0
    let containerClasses = [style.radio__container, style.radio__containerFocus]
    let error = null

    if (field.meta.active || field.input.value) {
        index = 1
    }

    if (field.meta.error && field.meta.touched && !field.meta.active) {
        error = <span className={style.error}><p>{field.meta.error}</p></span>
    }

    let containerClass = containerClasses[index]
    let icon = getLoginRegistrationIcon(field.placeholder, index)

    return (
        <>
            <div className={containerClass}>
                {/* {icon} */}
                <input
                    {...field.input}
                    id='Admin'
                    key={field.placeholder}
                    className={style.radio}
                    type='radio'
                    name='role'
                    value='1'
                />
                <label htmlFor="Admin" className={style.label}><p>Admin</p></label>
                <input
                    {...field.input}
                    id='Advertiser'
                    key={field.placeholder}
                    className={style.radio}
                    type='radio'
                    name='role'
                    value='2'
                />
                <label htmlFor="Advertiser" className={style.label}><p>Advertiser</p></label>
                <input
                    {...field.input}
                    id='Master'
                    key={field.placeholder}
                    className={style.radio}
                    type='radio'
                    name='role'
                    value='3'
                />
                <label htmlFor="Master" className={style.label}><p>Master</p></label>
                {error}

            </div>

        </>
    )

}


export default InputRoles