import React from 'react';
import "./NavBar.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from '../pages/Home';
import { Stats } from '../pages/Stats';
import { Layout } from '../pages/Layout';
import { Table } from '../pages/Table';

export const NavBar = () => {
    return(
        <div className='nav-bar'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Navigate to ="/home" />} />
                        <Route exact path="home" element={<Home/>}/>
                        <Route path="table" element={<Table/>}/>
                        <Route path="stats" element={<Stats/>}/>
                    </Route>                                           
                </Routes>
            </BrowserRouter>
        </div>    
    );
}