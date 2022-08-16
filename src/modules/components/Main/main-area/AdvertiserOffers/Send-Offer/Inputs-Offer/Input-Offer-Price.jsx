
import style from '../Send-Offer.module.css'


const InputOfferPrice = ({ input, meta, ...props }) => {
   


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
                            type="number"
                            placeholder='price'
                            {...input}
                            {...props} />
    
                       
                    </div>

                </div>

            </div>

          
        </>

    )
}

export default InputOfferPrice