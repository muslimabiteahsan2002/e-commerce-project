import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from '../../pages/homePage/HomePage';
import LaseerPage from '../../pages/laseerPage/LaseerPage';
import InkjactPages from '../../pages/inkjactrPages/InkjactPages';
import DodPage from '../../pages/dotPaage/DodPage';
import PhotocopyPage from '../../pages/photocopyPage/PhotocopyPage';
import InforPage from '../../pages/inforPage/InforPage';

class RouteReac extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/laser" element={<LaseerPage />} />
                        <Route path="/inkJet" element={<InkjactPages />} />
                        <Route path="/dot" element={<DodPage />} />
                        <Route path="/photocopy" element={<PhotocopyPage />} />
                        <Route path="/information" element={<InforPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default RouteReac;