import React, { useState, useEffect } from 'react'
import lifecycle from 'react-pure-lifecycle'
import { getGalleryImages } from '../apiClient'
import { useQueryParam, StringParam } from 'use-query-params'

let _isMounted = false

const methods = {
    componentWillUnmount() {
        _isMounted = false
    }
}

function Gallery() {
    const [gallery, setGallery] = useState([])
    const [galleryName, setGalleryName] = useQueryParam('galleryName', StringParam)

    useEffect(() => {
        _isMounted = true
        getGalleryImages(galleryName)
            .then(images => {
                if(_isMounted) {
                    setGallery(images)
                }
            })
    }, [])

    return(
        <div className="gallery container">
            <h1>Gallery</h1>
            <div className="gallery-container">
                {gallery.map(image => {
                    return <div className="gallery-image"></div>
                })}
            </div>
        </div>
    )
}

export default lifecycle(methods)(Gallery)