import Avatar from '../../../../../Elements/Avatar/Avatar'

import style from '../Send-Offer.module.css'
import arrowup from '../../../../../../../assets/imgs/posts/arrow-up.svg'
import FooterSendOffer from '../Footer-Send-Offer/Footer-Send-Offer';

const InputSendOffer = ({ input, meta, ...props }) => {
    let height = 40
    let displaySending = 'none'
    let displayDefault = 'block'
    let textHeight = '0px'
    let textCols = 5
    let textResize = 'none'
    let textClass = style.input
    let cameraOpacity = 50
    let sendArea = <p>Photo/Video</p>
    let user = props.user

    let leftAreaClass = style.left__area
    if (meta.active || input.value) {
        sendArea = <img
            src={arrowup}
            alt='arrow-up' />
        height = '100%'
        displaySending = 'flex'
        displayDefault = 'none'
        textHeight = '50px'
        textCols = 55
        textResize = 'vertical'
        textClass = style.inputActive
        leftAreaClass = style.left__areaActive
        cameraOpacity = 0

    }

    return (
        <>

            <div className={style.wrapper} style={
                {
                    minHeight: height
                }}
            >

                <div className={leftAreaClass}

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
                        {/* <Icon 
                        user={props} 
                        /> */}
                    </div>


                    {/* <textarea className={textClass}
                        {...input}
                        {...props}
                        style={{
                            height: textHeight,
                            resize: textResize
                        }}

                        placeholder='Send Offer'
                        // cols={textCols}
                        rows={'1'}
                    /> */}
                    <div className={style.inputsFrame}>
                        <input className={style.offersName}
                            type='text'
                            placeholder='Send Offer...'
                            {...input}
                            {...props} />
                        {/* <textarea className={textClass}
                            {...input}
                            {...props}
                            style={{
                                height: textHeight,
                                resize: textResize
                            }}

                            placeholder='Offer description'
                            // cols={textCols}
                            rows={'1'}
                        /> */}
                        <div className={textClass}  //offer parametrs frame
                            style={{
                                height: textHeight,
                                // resize: textResize

                            }}

                        >
                            

                        </div>
                    </div>

                </div>

                {/* <div className={style.right__area}
                    style={{
                        display: displayDefault,
                        opacity:cameraOpacity
                    }}
                >
                    <div className={style.camera__wrapper}>
                        <img src={camera} alt='camera' />
                        <p>Photo/Video</p>
                    </div>

                </div> */}
            </div>

            <FooterSendOffer {...input}
                {...props} display={displaySending} />




        </>

    )
}

export default InputSendOffer