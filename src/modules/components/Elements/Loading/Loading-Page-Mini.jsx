import dark from './Dark-Loading-Page.module.css'

const LoadingMini = (props) => {

    return (
       
            <div className={dark.mini__wrapper}>
                <img className={dark.logo__mini} src={props.style.logo} alt="logo" />
            </div>

       

    )

}
export default LoadingMini