import React, { useState, useEffect } from 'react'
import { getAllFavourites } from '../apiClient'
import lifecycle from 'react-pure-lifecycle'
let _isMounted = false

const methods = {
  componentWillUnmount() {
    _isMounted = false
  }
}

function Favourites() {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
      _isMounted = true
      getAllFavourites()
          .then(photos => {
            if(_isMounted) {
              setPhotos(photos)
            }
          })
      }, [])

    return (
        <div className="favourites container">
        <h1>Personal Favourites</h1>
        <ul>
            {photos.map(photo => {
              return <li key={photo.id}>
                <img src={photo.link} alt={photo.title} />
              </li>
            })}
        </ul>
        </div>
    )
}

export default lifecycle(methods)(Favourites)