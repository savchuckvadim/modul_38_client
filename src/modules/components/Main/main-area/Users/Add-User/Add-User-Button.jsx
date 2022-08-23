import { NavLink } from "react-router-dom"
import style from '../Users.module.css'

const AddUserButton = () => {

    return <NavLink to='../addUser'> <p className={style.add__user}>+Add User</p></NavLink>
}

export default AddUserButton