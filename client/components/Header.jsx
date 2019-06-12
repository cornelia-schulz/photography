import React, { useState, useEffect } from 'react'

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
                        <img src="/images/CS_photgraphy_black.png" alt="Cornelia Schulz Photography Logo" />
                    </div>
                    <button onClick={toggleMenu} className="header-right">
                        <img src="/images/menu.png" alt="Mobile menu" />
                    </button>
                    {menuIsOpen &&<ul className="mobile-menu hidden">
                        <li>Home</li>
                        <li>Galleries</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>}
                </div>
            </div>
        </header>
    )
}
export default Header