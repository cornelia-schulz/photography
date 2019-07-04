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
        console.log('running')
        getAllGalleries()
            .then(galleries => {
                if(_isMounted) {
                    setGalleries(galleries)
                }
            })
    }, [galleries])

    return(
        <div className="galleries container">
            <h1>Galleries</h1>
            <div className="galleries-container">
                {galleries.map(gallery => {
                    return <div className="gallery-image-container">
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