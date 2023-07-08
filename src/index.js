import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/'
import About from './pages/About/'
import Error from './pages/404/'
import FicheLogement from './pages/Fiche-Logement/'
import Header from './components/Header'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="*" element={<Error />} />
                <Route path="/Fiche-Logement/:idLogement" element={<FicheLogement />} />
            </Routes>
            <Home />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)