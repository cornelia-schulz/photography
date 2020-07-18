import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './i18n'
import App from './components/App'
import { ParallaxProvider } from 'react-scroll-parallax'
import { QueryParamProvider } from 'use-query-params'

ReactDOM.render(
    <Router>
        <QueryParamProvider ReactRouterRoute={Route}>
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        </QueryParamProvider>
    </Router>, 
document.getElementById('app'))
