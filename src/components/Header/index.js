import React, { useState } from 'react';
import Nav from '../Nav';

function Header () {

    const [pages] = useState([
        { name: 'Home', id: 'home'},
        { name: 'Thoughts', id: 'thoughts'},
        { name: 'About', id: 'about'},
    ]);
    
    const [currentPage, setCurrentPage] = useState(pages[0]);

    return (
        <header>
            <div id="header" className="hero-image">
                <h2 className="headerName">
                    <a href="/" class="intro">
                        Canon
                    </a>
                </h2>
            </div>
            <div>
                <Nav
                    pages={pages}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                ></Nav>
            </div>
        </header>
    );
}

export default Header;