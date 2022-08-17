import Button from "../Button"


const Delete = (props) => {

    let colorOfButton = 'red'
    let onButtonClick = props.follow //change to delet User thunk

    let disable = props.followingInProgress.some(id => id === props.user.id)
    let name = 'Delete User'

  
        return <Button
            name={name}
            border={12}
            disable={disable}
            color={colorOfButton}
            onClick={() => {

                onButtonClick(props.offer.id)

            }} />
    


}

export default Delete