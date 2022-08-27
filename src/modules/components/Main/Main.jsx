import { Navigate, Route, Routes } from "react-router-dom"
import style from './Main.module.css';
import NavMenuContainer from "./Nav-Menu/Nav-Menu-Container";
import {UsersContainer} from "./main-area/Users/Users-Container";
import AdvertiserContainer from "./main-area/AdvertiserOffers/Advertiser-Container";
import {MasterContainer} from "./main-area/MasterOffers/Master-Container";
import OfferContainer from "./main-area/Offer/Offer-Container";
import { HomePageContainer } from "./main-area/Home-Page/Home-Page-Container";
import AddUserContainer from "./main-area/Users/Add-User/Add-User-Container";
import { FinanceContainer } from "./main-area/Finance/Finance-Container";
import { NotFoundContainer } from "./main-area/404-Page/404-Page-Container ";


const Main = (props) => {
    let rolesRoutes = null
    if (props.authUser.role === 'Admin') {
        rolesRoutes = <>
            <Route path="users" element={<UsersContainer />} />
            <Route path="addUser" element={<AddUserContainer/>} />
        </>
    } else if (props.authUser.role === 'Advertiser') {
        rolesRoutes = <>
            <Route path="advertiserOffers" element={<AdvertiserContainer />}>
                {/* <Route path=":userId" element={<Navigate replace to='../' />} /> */}
            </Route>
        </>
    } else if (props.authUser.role === 'Master') {
        rolesRoutes = <>
            <Route path="masterOffers" element={<MasterContainer />}/>
                {/* <Route path=":userId" element={<NotFound />} />
            </Route> */}
            <Route path="offer" element={<OfferContainer />}>
                <Route path=":offerId" element={<OfferContainer />} />
            </Route>
        </>
    }
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
                        <Route path="*" element={<Navigate replace to={'notfound'} />} />
                        <Route path="/" index element={<Navigate replace to={'profile'} />} />
                        {/* <Route path="login" element={<LoginContainer  />} /> */}
                        <Route path="notfound" element={<NotFoundContainer />} />
                        <Route path="profile" element={<HomePageContainer />}>
                            <Route path=":userId" element={<HomePageContainer />} />
                        </Route>


                        {rolesRoutes}

                        <Route path="finance" element={<FinanceContainer />} />


                    </Routes>
                    {/* <RouteCurrentDialogContainer/> */}
                </div>
            </div>
        </main>

    )
}

export default Main