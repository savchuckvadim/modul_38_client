import Avatar from '../../../../../Elements/Avatar/Avatar'

import style from '../Send-Offer.module.css'


const InputOfferName = ({ input, meta, ...props }) => {
   

    let leftAreaClass = style.left__area
    let placeHolder = 'Send Offer...'
    if (meta.active || input.value) {
        
        placeHolder = 'Offer Name...'
       
      

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
                            // display: displayDefault
                        }} className={style.icon__wrapper}>
                        <Avatar
                            size={40}
                            link={false}
                            // img={props.user.photos.small}
                            // name={props.user.fullName}
                            user={props.user}
                        />
                      
                    </div>

                    <div className={style.inputsFrame}>
                        <input className={style.offersName}
                            type='text'
                            placeholder={placeHolder}
                            {...input}
                            {...props} />
    
                       
                    </div>

                </div>

            </div>

          
        </>

    )
}

export default InputOfferName