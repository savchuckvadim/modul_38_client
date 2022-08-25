import style from './Send-Offer.module.css'

import React from 'react'
import { reduxForm, Field, reset } from 'redux-form'
// import InputSendOffer from './Inputs-Offer/Send-Offer-Form-Controls'
// import InputOffer from './Inputs-Offer/Input-Offer-Name'
import InputOfferName from './Inputs-Offer/Input-Offer-Name'
import InputOfferDescription from './Inputs-Offer/Input-Offer-Description'
import FooterSendOffer from './Footer-Send-Offer/Footer-Send-Offer'
import InputOfferUrl from './Inputs-Offer/Input-Offer-Url'
import InputOfferPrice from './Inputs-Offer/Input-Offer-Price'
import { requiredFields, symbols30, symbols300 } from '../../../../../utils/Validators/validator'

export const SendOffer = (props) => {

    const submit = (values, dispatch) => {

        props.sendOffer(props.user.id, values.name, values.description, values.url, values.price)
        dispatch(reset('sendOffer'))

    }
    
  
    return (
        <SendOfferFormReduxForm onSubmit={submit} user={props.user} />
    )
}
let SendOfferForm = (props) => {
    


    return (
        <form onSubmit={props.handleSubmit} className={style.frame}>


            <Field
                component={InputOfferName}
                name='name'
                user={props.user}
                validate={[requiredFields, symbols30]}
            />

            <Field
                component={InputOfferUrl}
                name='url'
                user={props.user}
                validate={requiredFields}
            />
            <Field
                component={InputOfferPrice}
                name='price'
                user={props.user}
                validate={requiredFields}
            />
            <Field
                component={InputOfferDescription}
                name='description'
                user={props.user}
                validate={[requiredFields, symbols300]}
            />
           
            <FooterSendOffer
                {...props} display={'flex'} />

        </form>
    )
}

const SendOfferFormReduxForm = reduxForm({ form: 'sendOffer' })(SendOfferForm)
export default SendOffer