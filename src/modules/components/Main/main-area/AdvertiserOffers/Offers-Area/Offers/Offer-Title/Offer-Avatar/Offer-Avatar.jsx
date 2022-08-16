import style from './Offer-Avatar.module.css'

const OfferAvatar = (props) => {

    // size={68}
    // border={false}
    // user={props.user} -> name, surname, photos->small
    // link={`../profile/${props.userId}`}
   
    
    let initials = 'SF'
    let img = null
    if (props.user) {
        initials = (props.user.name.substring(0, 1) + props.user.surname.substring(0, 1)).toUpperCase()

    } else {
        initials = 'SF'
    }
        
       
       



let avatar = <div className={style.avatar}
    style={{
        backgroundImage: ` url(${img || null})`,
        width: props.size,
        height: props.size,
        border: props.border || 'none'
    }}>
    {!props.img && <h1 className={style.initials}
        style={{
            fontSize: props.size / 2.8
        }}
    >
        {initials}

    </h1>}

</div>
// if (props.link && props.link !== undefined) {
//     return <NavLink className={style.link} replace to={`${props.link}`}>{avatar}</NavLink>
// } else {
    return avatar
// }

}

export default OfferAvatar