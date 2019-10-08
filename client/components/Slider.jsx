import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const Slider = ({images, currentImage, isShowing, hide }) => isShowing ? ReactDOM.createPortal (
    <React.Fragment>
        <div className="slider">
            <h1>{images.find(i=>i.id === currentImage).title}</h1>
            <h2 className="test">TEST</h2>
        </div>
    </React.Fragment>, document.body
) : null

export default Slider