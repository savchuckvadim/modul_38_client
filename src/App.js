import './App.css';

import { Route, Routes } from 'react-router-dom';
import LoginRedirect from './modules/components/Login-Page/Login-Redirect';
import React from "react";
import Modul38 from './modules/components/MODUL_38-App/MODUL_38';




function App(props) {


  return (

    <div className="App">

     
        <Routes>
          <Route path="*" index element={<Modul38 authUser={props.authUser} />} />
          
          <Route path="login" element={<LoginRedirect />} />
          <Route path="registration" element={<LoginRedirect />} />
        </Routes>

      
    </div>

  );
}

export default App;
