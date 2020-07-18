import React, { useState, useEffect } from 'react'
import { getAllFavourites } from '../apiClient'
import lifecycle from 'react-pure-lifecycle'
import { useTranslation } from 'react-i18next'

let _isMounted = false

const methods = {
  componentWillUnmount() {
    _isMounted = false
  }
}

function Favourites() {
    const [photos, setPhotos] = useState([])
    const { t, i18n } = useTranslation()

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
        <h1>{t('personalFavourites')}</h1>
        <ul>
            {photos && photos.length > 0 && photos.map(photo => {
              return <li key={photo.id}>
                <img src={photo.src} alt={photo.title} />
              </li>
            })}
        </ul>
        </div>
    )
}

export default lifecycle(methods)(Favourites)