import { Navigate, Route, Routes } from "react-router-dom"
import style from './Main.module.css';
import NavMenuContainer from "./Nav-Menu/Nav-Menu-Container";
import ProfileContainer from "./main-area/Profile/Profile-Container";
import UsersContainer from "./main-area/Users/Users-Container";
import MessagesContainer from "./main-area/Messages/Messages-Container";
import AdvertiserContainer from "./main-area/AdvertiserOffers/Advertiser-Container";
import MasterContainer from "./main-area/MasterOffers/Master-Container";


const Main = () => {

    return (

        <main id={style.main}>
            <div className={style.container}>
                <div id={style.left__area}>
                    <div id={style.left__menu}>
                        {/* <LeftItemsContainer /> */}
                        <NavMenuContainer />
                    </div>
                </div>
                <div id={style.main__area}>
                    <Routes>
                        <Route path="*" index element={<Navigate replace to={'profile'} />} />
                        {/* <Route path="login" element={<LoginContainer  />} /> */}

                        <Route path="profile" element={<ProfileContainer />}>
                            <Route path=":userId" element={<ProfileContainer />} />
                        </Route>
                        
                        <Route path="messages//*" element={<MessagesContainer />} />
                        {/* <Route path="dialog//*" element={< />} /> */}
                        <Route path="users" element={<UsersContainer />} />

                        <Route path="advertiserOffers" element={<AdvertiserContainer />}>
                            <Route path=":userId" element={<AdvertiserContainer />} />
                        </Route>
                        <Route path="masterOffers" element={<MasterContainer />}>
                            <Route path=":userId" element={<MasterContainer />} />
                        </Route>


                    </Routes>
                    {/* <RouteCurrentDialogContainer/> */}
                </div>
            </div>
        </main>

    )
}

export default Main