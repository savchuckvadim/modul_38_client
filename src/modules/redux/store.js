import { applyMiddleware, combineReducers, createStore } from "redux";
import ThunkMiddleware from 'redux-thunk';

import dialogsReducer from "./reducers/dialogs/dialogs-reduser";
import { themeReducer } from "./reducers/theme/style-reducer";
import navMenuReducer from "./reducers/nav-menu/nav-menu-reducer";
import usersReducer from "./reducers/users/users-reducer";
import authReducer from "./reducers/auth/auth-reducer";
import { reducer as formReducer } from 'redux-form'
import LoginRegistrationReducer from "./reducers/login-registaration/login-registration-reducer";
import appReducer from "./reducers/app-reducer";
import registrationReducer from "./reducers/auth/registration-reducer";
import { offerReducer } from "./reducers/offers/offer-reducer";
import masterReducer from "./reducers/master/master-reducer";

let reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    registration: registrationReducer,
    loginRegistration: LoginRegistrationReducer,
    offers: offerReducer,
    master: masterReducer,
    // currentUser: currentUserReducer,
    users: usersReducer,
    theme: themeReducer,
    navMenu: navMenuReducer,
    dialogsReducer,
    // profileReducer,
    // newMessageReducer,
    form: formReducer


});


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// const store = createStore(reducers, /* preloadedState, */ composeEnhancers(

//     applyMiddleware(ThunkMiddleware)
//   ));

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));
export default store;