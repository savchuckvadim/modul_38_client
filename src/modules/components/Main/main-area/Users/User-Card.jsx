import { NavLink } from 'react-router-dom';
import style from './User-Card.module.css';
import FollowUnfollowButtons from '../../../Elements/Button/Follow-Unfollow-Buttons/Follow-Unfollow-Buttons';
import Avatar from '../../../Elements/Avatar/Avatar';
import Delete from '../../../Elements/Button/Delete-Buttons/Delete-Buttons';

const UserCard = (props) => {


    return (
        <div className={style.frame}>
           
                <Avatar
                size={68}
                name={props.name}
                link={`../profile/${props.user.id}`}
                user={props.user}
                img={props.user.photo}
                />

            {/* <NavLink className={style.login} to={'../profile/' + props.user.id}> */}
                <p className={style.login} onClick={() => {
                    // props.setVisitedUser(props.user)
                    }} >{`${props.user.name} ${props.user.surname}`}</p>
            {/* </NavLink> */}

            <div className={style.follow__wrapper}>

        
                <Delete 
                user={props.user}  
                followThunk={props.followThunk}
                unFollowThunk={props.unFollowThunk}
                followingInProgress={props.followingInProgress}
                authUser={props.authUser}
                />
            </div>
        </div>
    )
};

export default UserCard
