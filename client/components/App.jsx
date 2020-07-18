import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styles from '../../server/public/css/style.scss'
import Header from './Header'
import Footer from './Footer'
import Favourites from './Favourites'
import About from './About'
import Contact from './Contact'
import Galleries from './Galleries'
import Banner from './Banner'
import IndividualGallery from './IndividualGallery'

function App () {

    return(
      <Router>
        <Suspense fallback="loading">
          <Route path='/' component={Header} />
          <Route exact path='/' component={Banner} />
          <Route path='/about' component={Banner} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/galleries/:name' component={IndividualGallery} />
          <Route exact path='/galleries' component={Galleries} />
          <Route exact path='/' component={Favourites} />
          <Route path='/' component={Footer} />
        </Suspense> 
      </Router>  
    )

}
export default App