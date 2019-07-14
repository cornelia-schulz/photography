import React, { useState, useEffect } from 'react'
import lifecycle from 'react-pure-lifecycle'
import { getGalleryImages } from '../apiClient'
import useReactRouter from 'use-react-router'

let _isMounted = false

const methods = {
    componentWillUnmount() {
        _isMounted = false
    }
}

function Gallery() {
    const { history, location, match } = useReactRouter()
    const [gallery, setGallery] = useState([])
    const path = location.pathname
    const splitPath = path.split('/')
    const galleryName = splitPath[splitPath.length-1]

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
            <h1>{galleryName}</h1>
            {/* <div className="gallery-container">
                {gallery.map(image => {
                    return <div className="gallery-image"></div>
                })}
            </div> */}
        </div>
    )
}

export default lifecycle(methods)(Gallery)