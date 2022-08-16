import style from './Offer-Title.module.css'
import OfferAvatar from './Offer-Avatar/Offer-Avatar'

const OfferTitle = (props) => {
    //props:
    //userId
    //size
    let now = Date.now()
    let createdAt  = new Date(Date.parse(props.created_at));
    let date = createdAt.toLocaleDateString()
    
    let link = false
    props.advertiser.id
    ? link = `../../profile/${props.advertiser.id }`
    : link = false
    

    let fontSize = 14
    let iconSize = 48   
    let dateLineHeight = '22px'
    if (props.size === 56) {
        fontSize = 16
        iconSize = 56
        dateLineHeight = '24px'

    }
    
    return (

        <div className={style.user__wrapper}>
            <div className={style.icon__wrapper}
                style={{
                    width: iconSize,
                    height: iconSize
                }}
            >
               
                <OfferAvatar
                size={iconSize}
                // link={link}
                user={props.advertiser}
                />
            </div>

            <div className={style.user__info}>
                <p className={style.name}
                    style={{
                        fontSize: fontSize
                    }}
                >
                  {props.name}
                </p>
                <p className={style.date}
                style={{
                    lineHeight: dateLineHeight
                }}
                >{`Created at: ${date}`}</p>
            </div>

        </div>
    )
}

export default OfferTitle