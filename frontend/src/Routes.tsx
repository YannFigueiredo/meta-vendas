import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import Header from "./components/Header";

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}