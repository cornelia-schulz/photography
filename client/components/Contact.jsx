import React, { useState, useEffect } from 'react'

function Contact() {

    return(
        <div className="contact container">
            <h1>Say hello</h1>
            <p>If you have any questions or just want to say hello, drop me a line below!</p>
            <form>
                <label for="contactName">Your name:</label>
                <input id="contactName" type="text" />
                <label for="contactEmail">Your email:</label>
                <input id="contactEmail" type="email" />
                <label for="contactMessage" rows="5">Your message:</label>
                <textarea></textarea>
            </form>
        </div>
    )
}

export default Contact