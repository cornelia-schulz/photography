import React from 'react'
import { composeInitialProps } from 'react-i18next'

function RightArrow(props) {
    return (
        <div className="next-arrow" onClick={props.goToNextImage}>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
        </div>
    )
}

export default RightArrow