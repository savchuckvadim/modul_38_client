
import HeaderContainer from '../Header/Header-Container';
import '../../../App.css'
import Main from '../Main/Main';


const Modul38 = (props) => {

    return (
        <div className="App">
            <HeaderContainer />
            <Main authUser={props.authUser} />
        </div>
    )
}
export default Modul38