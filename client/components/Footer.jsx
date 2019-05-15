import React from 'react'
import {withNamespaces} from 'react-i18next'

function Footer() {
    
    return (
        <footer>
            <container>
                <row>
                    <col>
                        <img src="/images/facebook.png" alt="Link to Facebook" />
                    </col>
                    <col>
                        <img src="/images/twitter.png" alt="Link to Twitter" />
                    </col>
                    <col>
                        <img src="/images/500px-logo.png" alt="Link to 500px" />
                    </col>
                    <col>
                        <img src="/images/flickr.png" alt="Link to Flickr" />
                    </col>
                    <col>
                        <img src="/images/instagram.png" alt="Link to Instagram" />
                    </col>
                </row>
                <row>
                    &copy; Cornelia Schulz 2019
                </row>
            </container>
        </footer>
    )
}

export default Footer