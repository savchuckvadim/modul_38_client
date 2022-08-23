import { connect } from "react-redux"
import { setNewUser } from "../../../../../redux/reducers/auth/registration-reducer"
import { createNewUser } from "../../../../../redux/reducers/users/users-reducer"
import FormCard from "../../../../Login-Page/Login-Registaration-Form/Form-Card/Form-Card"

const mapStateToProps = (state) => {
    const registration = state.loginRegistration.registration
    return {
        type: 'addUser',
        fields: registration.fields,

    }
}

const AddUserContainer = connect(mapStateToProps, {
    createNewUser:setNewUser
})(FormCard)

export default AddUserContainer