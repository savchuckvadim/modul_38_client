import style from './User-Card.module.css';
import Avatar from '../../../Elements/Avatar/Avatar';
import Delete from '../../../Elements/Button/Delete-Buttons/Delete-Buttons';
import { LightLoadingMini } from '../../../Elements/Loading/Light-Loading-Mini-Container ';

const UserCard = (props) => {

    if (props.deletingUser === props.user.id) {
        return (
            <div className={style.frame}>
                <LightLoadingMini />
            </div>
        )
    }
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

            <div className={style.delete}>


                <Delete
                    userId={props.user.id}
                    deleteUser={props.deleteUser}
                    deletingUser={props.deletingUser}
                />
            </div>
        </div>
    )
};

export default UserCard
