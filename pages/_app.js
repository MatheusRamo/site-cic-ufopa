import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/styles.css';

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