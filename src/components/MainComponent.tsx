import React from 'react';
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import { Router } from "@reach/router";
import About from './AboutComponent';
import Discover from './DiscoverComponent';

const Main =():JSX.Element => {
    return(
        <>
            <Header/>
            <Router>
                <Home default path="/home"/>    
                <About path="/about"/>
                <Discover path="/discover"/>  
            </Router>
            <Footer/>
        </>
    );
}
export default Main;