import React from 'react';
import "./NavBar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home';
import { Stats } from '../pages/Stats';
import { Layout } from '../pages/Layout';

export const NavBar = () => {
    return(
        <div className='nav-bar'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="stats" element={<Stats/>}/>
                    </Route>                
                </Routes>
            </BrowserRouter>
        </div>    
    );
}