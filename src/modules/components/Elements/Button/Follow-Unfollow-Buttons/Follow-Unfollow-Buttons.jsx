import Button from "../Button"
import style from "./Follow-Unfollow-Buttons.module.css"

const FollowUnfollowButtons = (props) => {

    let colorOfButton = 'red'
    let onButtonClick = props.follow

    let disable = props.followingInProgress.some(id => id === props.offer.id)
    let name = 'Follow'
let linkDisplay = 'none'


    if (props.offer.isFollowing) {

        if(props.offer.link){
            linkDisplay = 'inline-block'
        }


        colorOfButton = 'grey'
        onButtonClick = props.unfollow
        name = 'Unfollow'
        return (<div className={style.withUrl__wrapper}>
            <input readOnly={true} className={style.url} style={{ 'display': linkDisplay }} type='url' value={props.offer.link} />
            <div className={style.twoButtons}>

                <div className={style.button__wrapper}>
                    <Button
                        name={'Get Url'}
                        border={12}
                        disable={disable}
                        color={'red'}
                        onClick={() => {
                            props.getLink(props.offer.id)
                        }} />
                </div>
                <div className={style.button__wrapper}>
                    <Button
                        name={name}
                        border={12}
                        disable={disable}
                        color={colorOfButton}
                        onClick={() => {
                            onButtonClick(props.offer.id)
                        }} />
                </div>
            </div>
        </div>
        )
    } else {
        return (
            <div className={style.twoButtons}>
                <Button
                    name={name}
                    border={12}
                    disable={disable}
                    color={colorOfButton}
                    onClick={() => {

                        onButtonClick(props.offer.id)

                    }} />
            </div>
        )

    }


}

export default FollowUnfollowButtons