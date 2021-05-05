import React from 'react';
// import { Link } from "react-router-dom";

function Nav(props) {

    return (
        <div class="dropdown">
            {/* <div class="dropbtn">Menu</div> */}
            <div>
                <nav>
                    <ul>
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/thoughts">Thoughts</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Nav;