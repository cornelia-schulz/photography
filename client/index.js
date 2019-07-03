import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import './i18n'
import App from './components/App'
import { ParallaxProvider } from 'react-scroll-parallax'

ReactDOM.render(
    <Router>
        <ParallaxProvider>
            <App />
        </ParallaxProvider>
    </Router>, 
document.getElementById('app'))
