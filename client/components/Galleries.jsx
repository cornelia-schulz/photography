import React, { useState, useEffect } from 'react'
import { getAllGalleries } from '../apiClient'
import lifecycle from 'react-pure-lifecycle'

let _isMounted = false

const methods = {
    componentWillUnmount() {
        _isMounted = false
    }
}

function Galleries() {
    const [galleries, setGalleries] = useState([])

    useEffect(() => {
        _isMounted = true
        getAllGalleries()
            .then(galleries => {
                if(_isMounted) {
                    setGalleries(galleries)
                }
            })
    })

    return(
        <div className="galleries container">
            <h1>Galleries</h1>
            <div>
                {galleries.map(gallery => {
                    return <div className="gallery-image-container">
                        <div className="gallery" style={{backgroundImage: `url(${gallery.cover_image})`}}></div>
                        <div className="gallery-overlay">
                            <p className="gallery-overlay-text">{gallery.name}</p>
                        </div>
                    </div>
                })}
            </div> 
        </div>
    )
}

export default lifecycle(methods)(Galleries)