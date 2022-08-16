
import style from '../Send-Offer.module.css'

const InputOfferDescription = ({ input, meta, ...props }) => {
    let textHeight = '24px'
    let textResize = 'none'
 
    if (meta.active || input.value) {
       
        textHeight = '50px' 
        textResize = 'vertical'
        

    }

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
                            
                        }} className={style.icon__wrapper}>

                    </div>

                    <div className={style.inputsFrame}>
                        <textarea
                            className={style.offersName}
                            {...input}
                            {...props}
                            style={{
                                height: textHeight,
                                resize: textResize
                            }}

                            placeholder='Offer Description...'
                            // cols={textCols}
                            rows={'1'}
                        />

                    </div>
                </div>


            </div>


        </>

    )
}

export default InputOfferDescription