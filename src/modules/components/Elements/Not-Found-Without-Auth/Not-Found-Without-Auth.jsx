import style from './Not-Found-Without-Auth.module.css'

const NotFoundWithoutAuth = (props) => {


    return (
        <div className={style.container} style={props.style}>
            <div className={style.wrapper} >
                <div className={style.logo}>
                    <img className={style.logo} src={props.style.logo} alt="logo" />
                </div>

                <h3 className={style.text}>404 Not Found</h3>
            </div>
        </div>
    )

}
export default NotFoundWithoutAuth