import Avatar from '../../../../../Elements/Avatar/Avatar'

import style from '../Send-Offer.module.css'
import arrowup from '../../../../../../../assets/imgs/posts/arrow-up.svg'
import FooterSendOffer from '../Footer-Send-Offer/Footer-Send-Offer';

const InputOfferUrl = ({ input, meta, ...props }) => {
   


    return (
        <>

            <div className={style.wrapper} style={
                {
                    // minHeight: height
                }}
            >

                <div className={style.left__areaActive}

                >
                    <div style={
                        {
                            // display: displayDefault
                        }} className={style.icon__wrapper}>
                       
                      
                    </div>

                    <div className={style.inputsFrame}>
                        <input className={style.offersName}
                            type='url'
                            // placeholder='URL'
                            placeholder="https://example.com"
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