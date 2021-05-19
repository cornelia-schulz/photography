import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// eslint-disable-next-line
import styles from '../../server/public/css/style.scss'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Favourites from './Favourites.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Galleries from './Galleries.jsx'
import Banner from './Banner.jsx'
import IndividualGallery from './IndividualGallery.jsx'

function App () {
    return(
      <Router>
        <Route path='/' component={Header} />
        <Route exact path='/' component={Banner} />
        <Route path='/about' component={Banner} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/galleries/:name' component={IndividualGallery} />
        <Route exact path='/galleries' component={Galleries} />
        <Route exact path='/' component={Favourites} />
        <Route path='/' component={Footer} />
      </Router>
    )
}
export default App