// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/404/'
import FicheLogement from './pages/Fiche-Logement'

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
