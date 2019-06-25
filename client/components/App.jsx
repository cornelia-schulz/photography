import React from 'react'
import {getAllPhotos} from '../apiClient'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styles from '../../server/public/css/style.scss'
import Header from './Header'
import Footer from './Footer'
import Favourites from './Favourites'
import About from './About'
import Contact from './Contact'
import Galleries from './Galleries'
import Banner from './Banner'
import { useTranslation, Trans } from 'react-i18next'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    getAllPhotos()
    .then(photos => {
      this.setState({photos})
    })
  }

  render() {
    return(
      <Router>
        <Route path='/' component={Header} />
        <Route path='/' component={Banner} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/galleries' component={Galleries} />
        <Route exact path='/' component={Favourites} />
        <Route path='/' component={Footer} />
      </Router>  
    )
  }

}
export default App