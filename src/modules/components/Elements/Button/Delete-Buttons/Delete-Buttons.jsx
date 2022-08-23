import Button from "../Button"


const Delete = (props) => {

    let colorOfButton = 'red'
    let disable = props.deletingUser
    let name = 'Delete User'

  
        return <Button
            name={name}
            border={12}
            disable={disable}
            color={colorOfButton}
            onClick={() => {props.deleteUser(props.userId)}} 
            />
    


}

export default Delete