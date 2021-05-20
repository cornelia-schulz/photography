import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

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
      <div className="container">
        <div className="row">
          <div className="header-left">
            <a href="/"><img src="/images/CS_photgraphy_black-100.png" alt="Cornelia Schulz Photography Logo" loading="lazy" /></a>
          </div>
          <div className="header-content">
            <div className="language-selectors">
              <select aria-label="Search" name="languages" id="languages" defaultValue={selectedLanguage} onBlur={changeLanguage} onChange={changeLanguage}>
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
              <li><Link to="/" onClick={toggleMenu} onKeyUp={toggleMenu}>{t('home')}</Link></li>
              <li><Link to="/galleries" onClick={toggleMenu} onKeyUp={toggleMenu}>{t('galleries')}</Link></li>
              <li><Link to="/about" onClick={toggleMenu} onKeyUp={toggleMenu}>{t('about')}</Link></li>
              <li><Link to="/contact" onClick={toggleMenu} onKeyUp={toggleMenu}>{t('contact')}</Link></li>
            </ul>}
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header