import { connect } from "react-redux"
import { setNewUser } from "../../../../../redux/reducers/auth/registration-reducer"
import FormCard from "./Form-Card/Add-User-Form-Card"

const mapStateToProps = (state) => {
    const registration = state.loginRegistration.registration
    return {
        type: 'addUser',
        fields: registration.fields,

    }
}

const AddUserContainer = connect(mapStateToProps, {
    setNewUser
})(FormCard)

export default AddUserContainer