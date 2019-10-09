import React from 'react'

function LeftArrow(props) {
    return (
        <div className="previous-arrow" onClick={props.goToPreviousImage}>
            <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
        </div>
    )
}

export default LeftArrow