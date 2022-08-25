
import style from '../Send-Offer.module.css'


const InputOfferPrice = ({ input, meta, ...props }) => {
   
    let placeholder = 'price'
    let inputClassName = style.offerInput

    if(meta.touched && !input.value && !meta.active){
        inputClassName = style.offerInput__error
        placeholder = meta.error
    }

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.left__areaActive}>
                    <div className={style.icon__wrapper}></div>
                    <div className={style.inputsFrame}>
                        <input className={inputClassName}
                            type="number"
                            placeholder={placeholder}
                            {...input}
                            {...props} />
                    </div>
                </div>
            </div>
        </>

    )
}

export default InputOfferPrice