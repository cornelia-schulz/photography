import React from 'react'
import {getAllPhotos} from '../apiClient'

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
      <div>
        <h1>Photos</h1>
        <ul>
          {this.state.photos.map(photo => {
            return <li key={photo.id}>{photo.title}</li>
          })}
        </ul>
      </div>
    )
  }

}
export default App