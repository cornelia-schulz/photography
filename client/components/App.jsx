import React from 'react'
import {getAllPhotos} from '../apiClient'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useTranslation, Trans } from 'react-i18next'
import Container from 'react-bootstrap/Container'

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
        <div className="container">
        <h1>Photos</h1>
          <ul>
            {this.state.photos.map(photo => {
              return <li key={photo.id}>{photo.title}</li>
            })}
          </ul>
        </div> 
        <Route path='/' component={Footer} />
      </Router>  
    )
  }

}
export default App