import React, { useState, useEffect } from 'react'
import { getGalleryImages } fron '../apiClient'
import lifecycle from 'react-pure-lifecycle'

let _isMounted = false

const methods = {
    componentWillUnmount() {
        _isMounted = false
    }
}

function Gallery() {
    const [gallery, setGallery] = useState([])
}

export default lifecycle(methods)(Gallery)