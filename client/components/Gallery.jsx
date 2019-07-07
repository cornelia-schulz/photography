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
    const [foo, setFoo] = useQueryParam('foo', StringParam)

    useEffect(() => {
        _isMounted = true
        getGalleryImages()
            .then(images => {
                if(_isMounted) {
                    setGallery(images)
                }
            })
    }, gallery)

    return(
        <div className="gallery container">
            <h1>Gallery</h1>
        </div>
    )
}

export default lifecycle(methods)(Gallery)