import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const { t, i18n } = useTranslation()
    const [language, setLanguage] = useState('en')

    function toggleMenu () {
        menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true)
    }

    const changeLanguage = () => {
        const languageCheckbox = document.getElementById('language-picker')
        if (languageCheckbox.checked) {
            setLanguage('de')
        } else {
            setLanguage('en')
        }
        i18n.changeLanguage(language)
    }

    useEffect(() => {
        console.log('useEffect', language)
        changeLanguage()
    }, [language])

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="header-left">
                        <a href="/"><img src="/images/CS_photgraphy_black.png" alt="Cornelia Schulz Photography Logo" /></a>
                    </div>
                    <div className="header-content">
                        <div className="language-selectors">
                            <div className="checkbox">
                                <input type="checkbox" name="language-picker" id="language-picker" value="language" onChange={() => changeLanguage()} />
                                <div className="checkbox-inner">
                                    <label htmlFor="language-picker"></label>
                                    <span></span>
                                </div>
    <div className="checkbox__EN">{t('en')}</div>
                                <div className="checkbox__DE">{t('de')}</div>
                            </div>
                        </div>
                        <nav className="header-right">
                            <ul>
                                <li className="nav-link"><Link to="/galleries">{t('galleries')}</Link></li>
                                <li className="nav-link"><Link to="/about">{t('about')}</Link></li>
    <li className="nav-link"><Link to="/contact">{t('contact')}</Link></li>
                            </ul>
                        </nav>
                        <button onClick={toggleMenu} className="header-right-mobile">
                            {!menuIsOpen &&<img src="/images/menu.png" alt="Open mobile menu" />}
                            {menuIsOpen &&<img src="/images/close.png" alt="Close mobile menu" />}
                        </button>
                        {menuIsOpen &&<ul className="mobile-menu hidden">
                            <li onClick="toggleMenu()"><Link to="/">{t('home')}</Link></li>
                            <li onClick="toggleMenu()"><Link to="/galleries">{t('galleries')}</Link></li>
                            <li onClick="toggleMenu()"><Link to="/about">{t('about')}</Link></li>
                            <li onClick="toggleMenu()"><Link to="/contact">{t('contact')}</Link></li>
                        </ul>}
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header