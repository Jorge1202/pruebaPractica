import React from 'react';
// import {HashRouter, Routes , Route } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../page/Layout';
import Login from '../page/Login';
import NotFound from '../page/NotFound';


import Home from '../page/Home';

const App = () => {
    return (
       
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Login/>}/>
                    <Route exact path="/home" element={<Home/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;