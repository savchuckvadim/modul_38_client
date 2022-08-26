
import style from "./404-Page.module.css";

const NotFound = (props) => {
    window.scrollTo(0, 0);

  
        return (
            <div className={style.wrapper}>
               
               <div className={style.logo}>
                    <img className={style.logo} src={props.style.logo} alt="logo" />
                </div>

                <h3 className={style.text}>404 Not Found</h3>
               
                
            </div>
        )
    
   

};

export default NotFound;