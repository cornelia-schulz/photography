import React, { useState, useEffect } from 'react'

function Galleries() {

    return(
        <div className="galleries container">
            <h1>Galleries</h1>
            <div className="gallery-image-container">
                <div className="gallery"></div>
                <div className="gallery-overlay">
                    <p className="gallery-overlay-text">Astro</p>
                </div>
            </div> 
        </div>
    )
}

export default Galleries