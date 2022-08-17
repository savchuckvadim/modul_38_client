
import style from './Description.module.css'

const Description = (props) => {
    
    return ( <p className={style.text}>{props.description}</p>)

}

export default Description