import React, { useState, useEffect } from 'react'
import { getAllGalleries } from '../apiClient'
import lifecycle from 'react-pure-lifecycle'
import { useTranslation } from 'react-i18next'

let _isMounted = false

const methods = {
  componentWillUnmount() {
    _isMounted = false
  }
}

function Galleries() {
  const [galleries, setGalleries] = useState([])
  const { t, i18n } = useTranslation()

  useEffect(() => {
    _isMounted = true
    getAllGalleries(i18n.language)
      .then(galleries => {
        if(_isMounted) {
          setGalleries(galleries)
        }
      })
  }, [i18n.language])

  return(
    <div className="galleries container">
      <h1>{t('galleries')}</h1>
      <div className="galleries-container">
        {galleries && galleries.map(gallery => {
          return <div key={gallery.id} className="gallery-image-container">
            <div className="gallery" style={{backgroundImage: `url(${gallery.cover_image})`}}></div>
            <a href={'/galleries/' + gallery.name}>
              <div className="gallery-overlay">
                <p className="gallery-overlay-text">{gallery.name}</p>
              </div>
            </a>
          </div>
        })}
      </div> 
    </div>
  )
}

export default lifecycle(methods)(Galleries)