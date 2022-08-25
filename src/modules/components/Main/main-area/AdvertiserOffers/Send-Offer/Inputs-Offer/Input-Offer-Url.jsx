import Avatar from '../../../../../Elements/Avatar/Avatar'

import style from '../Send-Offer.module.css'
import arrowup from '../../../../../../../assets/imgs/posts/arrow-up.svg'
import FooterSendOffer from '../Footer-Send-Offer/Footer-Send-Offer';

const InputOfferUrl = ({ input, meta, ...props }) => {
   
    let placeholder = "https://example.com"
    let inputClassName = style.offerInput

    if(meta.touched && !input.value && !meta.active){
        inputClassName = style.offerInput__error
        placeholder = meta.error
    }
   

    return (
        <>

            <div className={style.wrapper}>
                <div className={style.left__areaActive}>
                    <div  className={style.icon__wrapper}> </div>
                    <div className={style.inputsFrame}>
                        <input className={inputClassName}
                            type='url'
                            placeholder={placeholder}
                            pattern="https://.*"
                            {...input}
                            {...props} />
                    </div>
                </div>
            </div>
        </>

    )
}

export default InputOfferUrl