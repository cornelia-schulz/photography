import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    function toggleMenu () {
        menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true)
    }

    useEffect(() => {})

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="header-left">
                        <a href="/"><img src="/images/CS_photgraphy_black.png" alt="Cornelia Schulz Photography Logo" /></a>
                    </div>
                    <nav className="header-right">
                        <ul>
                            <li className="nav-link"><Link to="/galleries">Galleries</Link></li>
                            <li className="nav-link"><Link to="/about">About</Link></li>
                            <li className="nav-link"><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                    <button onClick={toggleMenu} className="header-right-mobile">
                        {!menuIsOpen &&<img src="/images/menu.png" alt="Open mobile menu" />}
                        {menuIsOpen &&<img src="/images/close.png" alt="Close mobile menu" />}
                    </button>
                    {menuIsOpen &&<ul className="mobile-menu hidden">
                        <li onClick="toggleMenu()"><Link to="/">Home</Link></li>
                        <li onClick="toggleMenu()"><Link to="/galleries">Galleries</Link></li>
                        <li onClick="toggleMenu()"><Link to="/about">About</Link></li>
                        <li onClick="toggleMenu()"><Link to="/contact">Contact</Link></li>
                    </ul>}
                </div>
            </div>
        </header>
    )
}
export default Header