import React from 'react';
import Presentation from "./pages/Presentation";
import './styles/App.css';
import LeRouteur from "./pages/LeRouteur";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
import Instructions from "./pages/Instructions";
import Reactivity from "./pages/Reactivity";
import ReactivityBis from './pages/ReactivityBis';
import Props from "./pages/Props";
import Requests from "./pages/Requests";

function App() {
  return (
        <BrowserRouter> {/* en top level */}
            <Navigation/>
            <Routes> {/* Ici : injecte les composants en fonction de la route, du chemin dans l'url */}
                <Route path="/" element={<Presentation/>} />
                <Route path="/routeur" element={<LeRouteur/>} />
                <Route path="/instructions" element={<Instructions/>} />
                <Route path="/reactivity" element={<Reactivity/>} />
                <Route path='/reactivity-bis' element={<ReactivityBis/>} />
                <Route path='/props' element={<Props/>} />
                <Route path='/req' element={<Requests/>} />
                <Route path="*" element={<NotFound/>} />

            </Routes>

            <footer>Dawan | 2023</footer>
        </BrowserRouter>
  )
}

export default App;
