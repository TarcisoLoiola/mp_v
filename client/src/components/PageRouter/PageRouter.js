import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Home from '../Pages/Home/Home';
import Admin from '../Pages/Admin/Admin';

class PageRouter extends Component{
    render(){
        return(
            <div>
                <Route exact path = '/' component = { Home } />
            </div>
            )
    }
}

export default PageRouter;


// <aside className = 'lf-page-router-aside-container'>
// </aside>