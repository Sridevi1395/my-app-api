import React from 'react';

import './Navbar.css';

function Navbar () {

    return (
        <section className="navbar">
        <a href="/" className="navbar-item">Home</a>

        <a href="/about" className="navbar-item">Quiz</a>
        </section>
    )


}

export default Navbar;