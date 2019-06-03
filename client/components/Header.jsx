import React from 'react'

function Header() {

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="header-left">
                        <img src="/images/CS_photgraphy_black.png" alt="Cornelia Schulz Photography Logo" />
                    </div>
                    <div className="header-right">
                        <img src="/images/menu.png" alt="Mobile menu" />
                    </div>
                    <ul className="mobile-menu hidden">
                        <li>Home</li>
                        <li>Galleries</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header