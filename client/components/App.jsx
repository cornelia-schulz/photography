import React, { Suspense, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from '../../server/public/css/style.scss'
import { languageProvider, useLanguage, LanguageProvider } from '../hooks/useLanguage'
import Header from './Header'
import Footer from './Footer'
import Favourites from './Favourites'
import About from './About'
import Contact from './Contact'
import Galleries from './Galleries'
import Banner from './Banner'
import IndividualGallery from './IndividualGallery'

function App () {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState('')
  const changeLanguage = () => {
    console.log('language change', language)
    console.log(document.getElementById('language-picker').checked)
    setLanguage(language)
    i18n.changeLanguage(language)
}
    return(
      <Router>
        <LanguageProvider>
          <Route path='/' component={Header} />
          <Route exact path='/' component={Banner} />
          <Route path='/about' component={Banner} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/galleries/:name' component={IndividualGallery} />
          <Route exact path='/galleries' component={Galleries} />
          <Route exact path='/' component={Favourites} />
          <Route path='/' component={Footer} />
        </LanguageProvider>
      </Router>
    )

}
export default App