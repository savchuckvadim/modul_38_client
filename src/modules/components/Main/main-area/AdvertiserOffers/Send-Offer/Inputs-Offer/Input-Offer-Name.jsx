import Avatar from '../../../../../Elements/Avatar/Avatar'

import style from '../Send-Offer.module.css'


const InputOfferName = ({input, meta, ...props }) => {
   

   let inputClassName = style.offerInput
    // let leftAreaClass = style.left__area
    let placeholder = 'Send Offer...'
    
    if (meta.active || input.value) {     
        placeholder = 'Offer Name...'
       
    }

    if(meta.touched && !input.value && !meta.active){
        inputClassName = style.offerInput__error
        placeholder = meta.error
    }


    return (
        <>
            <div className={style.wrapper}>
                <div className={style.left__areaActive}>
                    <div className={style.icon__wrapper}>
                        <Avatar
                            size={40}
                            link={false}
                            user={props.user}
                        />
                    </div>

                    <div className={style.inputsFrame}>
                   
                        <input className={inputClassName}
                            type='text'
                            placeholder={meta.error && placeholder}
                            {...input}
                            {...props} />
    
                    </div>
                </div>
            </div>     
        </>

    )
}

export default InputOfferName