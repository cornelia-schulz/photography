import React from 'react'

function Footer() {
    
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <a href="https://www.facebook.com/corneliaschulzphotography/" target="_blank"><img src="/images/facebook.png" alt="Link to Facebook" /></a>
                    </div>
                    <div className="footer-col">
                        <a href="https://twitter.com/Schulz_Images" target="_blank"><img src="/images/twitter.png" alt="Link to Twitter" /></a>
                    </div>
                    <div className="footer-col">
                        <a href="https://500px.com/corneliaschulz" target="_blank"><img src="/images/500px-logo.png" alt="Link to 500px" /></a>
                    </div>
                    <div className="footer-col">
                        <a href="https://www.flickr.com/photos/cornelia-schulz/" target="_blank"><img src="/images/flickr.png" alt="Link to Flickr" /></a>
                    </div>
                    <div className="footer-col">
                        <a href="https://www.instagram.com/corneliaschulzphotography/?hl=en" target="_blank"><img src="/images/instagram.png" alt="Link to Instagram" /></a>
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