// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Error from './pages/404/'
import FicheLogement from './pages/fiche-logement'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fiche-logement/:id" element={<FicheLogement />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default AppRoutes
