import React, {useEffect} from 'react';
import "./App.css"

import {Route, Routes, useLocation} from "react-router-dom";
import MainPages from "./Pages/MainPages.jsx";

const ScrollToTop=()=>{
    const [pathName]=useLocation();
    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathName]);
    return null;
}




const App = () => {


    return (
        <>
            <Routes>
                <Route path="/" element={<MainPages/>}/>
            </Routes>


        </>
    );
};

export default App;