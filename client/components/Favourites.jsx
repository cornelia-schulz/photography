import React, { useState, useEffect } from 'react'
import { getAllPhotos } from '../apiClient'

function Favourites() {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        getAllPhotos()
          .then(photos => {
            setPhotos(photos)
          })
      })

    return (
        <div className="favourites">
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

export default Favourites