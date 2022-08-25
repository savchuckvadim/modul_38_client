
import style from '../Send-Offer.module.css'

const InputOfferDescription = ({ input, meta, ...props }) => {
    let textHeight = '24px'
    let textResize = 'none'
    let placeholder = 'Offer Description...'
    let inputClassName = style.offerInput

    if (meta.active || input.value) {
        textHeight = '50px'
        textResize = 'vertical'

    }
    if(meta.touched && !input.value && !meta.active){
        inputClassName = style.offerInput__error
        placeholder = meta.error
    }
    if (meta.visited && meta.error && input.value) {
        inputClassName = style.offerInput__error
    }

    return (
        <>

            <div className={style.wrapper}>
                <div className={style.left__areaActive}>
                    <div className={style.icon__wrapper}></div>
                    <div className={style.inputsFrame}>
                        <textarea
                            className={inputClassName}
                            {...input}
                            {...props}
                            style={{ height: textHeight, resize: textResize }}
                            placeholder={placeholder}
                            rows={'1'}
                        />

                    </div>
                </div>


            </div>


        </>

    )
}

export default InputOfferDescription