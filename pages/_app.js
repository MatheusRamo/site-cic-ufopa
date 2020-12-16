import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/styles.css';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const App = ({Component, props}) => {
    return (
        <>
            <Header/>
            <Component {...props}/>
            <Footer/>
        </>
    )
};


export default App;