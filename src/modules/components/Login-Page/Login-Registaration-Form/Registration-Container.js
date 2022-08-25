import {
    connect
} from "react-redux"
import { setNewUser } from "../../../redux/reducers/auth/registration-reducer"
import { setError } from "../../../redux/reducers/login-registaration/login-registration-reducer"
import FormCard from "./Form-Card/Form-Card"

const mapStateToProps = (state) => {
    const registration = state.loginRegistration.registration
    return {
        type: registration.type,
        fields: registration.fields,
        title: registration.title,
        instruction: registration.instruction,
        privacy: registration.privacy,
        footerInstruction: registration.footerInstruction,
        footerLink: registration.footerLink,
        inProgress: state.auth.logining,
        error: state.loginRegistration.error,
        
        
    }
}

const RegistrationContainer = connect(mapStateToProps,{
    setNewUser,
    setError
})(FormCard)

export default RegistrationContainer