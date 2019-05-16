import React from 'react'

function Footer() {
    
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <img src="/images/facebook.png" alt="Link to Facebook" />
                    </div>
                    <div className="footer-col">
                        <img src="/images/twitter.png" alt="Link to Twitter" />
                    </div>
                    <div className="footer-col">
                        <img src="/images/500px-logo.png" alt="Link to 500px" />
                    </div>
                    <div className="footer-col">
                        <img src="/images/flickr.png" alt="Link to Flickr" />
                    </div>
                    <div className="footer-col">
                        <img src="/images/instagram.png" alt="Link to Instagram" />
                    </div>
                </div>
                <div className="row bottom-row">
                    <p>&copy; Cornelia Schulz 2019</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer