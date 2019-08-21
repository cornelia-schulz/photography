import React, { useState, useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'

function Contact() {

    return(
        <div className="contact container">
            <div className="contact-left">
                <Parallax className="custom-class" y={[-40, 0]} tagOuter="figure">
                    <img src="/images/contact.jpg" alt="Cornelia Schulz portrait with Moeraki Boulders" />
                </Parallax>
            </div>
            <div className="contact-right">
                <h1>Say hello!</h1>
                <p>If you have any questions or just want to say hello, drop me a line below!</p>
                <form>
                    <label htmlFor="contactName">Your name:</label>
                    <input id="contactName" type="text" placeholder="Your name" />
                    <label htmlFor="contactEmail">Your email:</label>
                    <input id="contactEmail" type="email" placeholder="Your email" required/>
                    <label htmlFor="contactMessage">Your message:</label>
                    <textarea rows="8" placeholder="Your message"></textarea>
                </form>
            </div>
        </div>
    )
}

export default Contact