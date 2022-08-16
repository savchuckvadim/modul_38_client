import style from './Send-Offer.module.css'

import React from 'react'
import { reduxForm, Field, reset } from 'redux-form'
import InputSendOffer from './Inputs-Offer/Send-Offer-Form-Controls'
import InputOffer from './Inputs-Offer/Input-Offer-Name'
import InputOfferName from './Inputs-Offer/Input-Offer-Name'
import InputOfferDescription from './Inputs-Offer/Input-Offer-Description'
import FooterSendOffer from './Footer-Send-Offer/Footer-Send-Offer'
import InputOfferUrl from './Inputs-Offer/Input-Offer-Url'
import InputOfferPrice from './Inputs-Offer/Input-Offer-Price'

export const SendOffer = (props) => {

    const submit = (values, dispatch) => {

        // props.send(values.sendPost)
        // props.sendPost(props.user.id, props.visitedProfileId, values.sendPost, null)
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
            />

            <Field
                component={InputOfferUrl}
                name='url'
                user={props.user}
            />
            <Field
                component={InputOfferPrice}
                name='price'
                user={props.user}
            />
            <Field
                component={InputOfferDescription}
                name='description'
                user={props.user}
            />
            <FooterSendOffer
                {...props} display={'flex'} />

        </form>
    )
}

const SendOfferFormReduxForm = reduxForm({ form: 'sendOffer' })(SendOfferForm)
export default SendOffer