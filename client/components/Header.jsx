import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageProvider, useLanguage } from '../hooks/useLanguage'

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { i18n, t } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language === 'en' ? 'English' : 'German')

  function toggleMenu () {
    menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true)
  }

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value === 'English' ? 'en' : 'de')
    setSelectedLanguage(e.target.value)
  }

  return (
    <header>
      <LanguageProvider>
      <div className="container">
        <div className="row">
          <div className="header-left">
            <a href="/"><img src="/images/CS_photgraphy_black.png" alt="Cornelia Schulz Photography Logo" /></a>
          </div>
          <div className="header-content">
            <div className="language-selectors">
              <label htmlFor="languages"></label>
              <select name="languages" id="languages" value={selectedLanguage} onChange={changeLanguage}>
                <option value="English">{t('en')}</option>
                <option value="German">{t('de')}</option>
              </select>
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
              <li onClick={toggleMenu}><Link to="/">{t('home')}</Link></li>
              <li onClick={toggleMenu}><Link to="/galleries">{t('galleries')}</Link></li>
              <li onClick={toggleMenu}><Link to="/about">{t('about')}</Link></li>
              <li onClick={toggleMenu}><Link to="/contact">{t('contact')}</Link></li>
            </ul>}
          </div>
        </div>
      </div>
      </LanguageProvider>
    </header>
  )
}
export default Header