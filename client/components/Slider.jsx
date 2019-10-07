import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const Slider = ({image, isShowing, hide }) => isShowing ? ReactDOM.createPortal (
    <React.Fragment>
        <div className="slider">
            <h1>{image.title}</h1>
            <h2 className="test">TEST</h2>
        </div>
    </React.Fragment>, document.body
) : null

export default Slider