import React from 'react';
import Presentation from "./pages/Presentation";
import './styles/App.css';
import LeRouteur from "./pages/LeRouteur";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";

function App() {
  return (
        <BrowserRouter> {/* en top level */}
            <Navigation/>
            <Routes> {/* Ici : injecte les composants en fonction de la route, du chemin dans l'url */}
                <Route path="/" element={<Presentation/>} />
                <Route path="/routeur" element={<LeRouteur/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>

            <footer>Dawan | 2023</footer>
        </BrowserRouter>
  )
}

export default App;
