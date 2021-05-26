import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from './Components/Common'
import Footer from './Components/Common/Footer/Footer.jsx'
import App from './App';


ReactDOM.render (
    <React.StrictMode>
    < Header />
    <App />
    <Footer/>
    </React.StrictMode>,
    document.getElementById('root')
);