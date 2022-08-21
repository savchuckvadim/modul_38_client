
import HeaderContainer from '../Header/Header-Container';
import '../../../App.css'
import Main from '../Main/Main';
import { HomePageContainer } from '../Main/main-area/Home-Page/Home-Page-Container';


const Sociopath = (props) => {

    return(
        <div className="App">
             <HeaderContainer />
            {props.authUser ? <Main authUser={props.authUser}/> : <HomePageContainer/>}
        </div>
    )
}
export default Sociopath