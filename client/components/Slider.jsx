import React from 'react'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import ReactDOM from 'react-dom'

const goToPreviousImage = () => {
    // click left arrow
}

const goToNextImage = () => {
    // click right arrow
}

const Slider = ({images, currentImage, isShowing, hide }) => isShowing ? ReactDOM.createPortal (
    <React.Fragment>
        <div className="slider">
            <Slide />
            <LeftArrow goToPreviousImage={goToPreviousImage} />
            <RightArrow goToNextImage={goToNextImage} />
            <h1>{images.find(i=>i.id === currentImage).title}</h1>
            <h2 className="test">TEST</h2>
        </div>
    </React.Fragment>, document.body
) : null

export default Slider