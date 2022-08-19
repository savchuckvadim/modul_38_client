import { Navigate, Route, Routes } from "react-router-dom"
import style from './Main.module.css';
import NavMenuContainer from "./Nav-Menu/Nav-Menu-Container";
import UsersContainer from "./main-area/Users/Users-Container";
import AdvertiserContainer from "./main-area/AdvertiserOffers/Advertiser-Container";
import MasterContainer from "./main-area/MasterOffers/Master-Container";
import OfferContainer from "./main-area/Offer/Offer-Container";
import { HomePageContainer } from "./main-area/Home-Page/Home-Page-Container";


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

                        <Route path="profile" element={<HomePageContainer />}>
                            <Route path=":userId" element={<HomePageContainer />} />
                        </Route>
                        
                        
                        <Route path="users" element={<UsersContainer />} />

                        <Route path="advertiserOffers" element={<AdvertiserContainer />}>
                            <Route path=":userId" element={<AdvertiserContainer />} />
                        </Route>
                        <Route path="masterOffers" element={<MasterContainer />}>
                            <Route path=":userId" element={<MasterContainer />} />
                        </Route>
                        <Route path="offer" element={<OfferContainer />}>
                            <Route path=":offerId" element={<OfferContainer />} />
                        </Route>


                    </Routes>
                    {/* <RouteCurrentDialogContainer/> */}
                </div>
            </div>
        </main>

    )
}

export default Main