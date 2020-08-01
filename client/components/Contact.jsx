import React, { useState, useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import { useTranslation } from 'react-i18next'
// import { LanguageProvider, useLanguage } from '../hooks/useLanguage'

function Contact() {
    const { t } = useTranslation()
    const send = () => {
        // send
      }
    return(
        <div className="contact container">
            <div className="contact-left">
                <Parallax className="custom-class" y={[-40, 0]} tagOuter="figure">
                    <img src="/images/contact.jpg" alt="Cornelia Schulz portrait with Moeraki Boulders" />
                </Parallax>
            </div>
            <div className="contact-right">
                <h1>{t('sayHello')}</h1>
                <p>{t('questions')}</p>
                <form>
                    <label htmlFor="contactName">{t('yourName')}</label>
                    <input id="contactName" type="text" placeholder={t('yourName')} />
                    <label htmlFor="contactEmail">{t('yourEmail')}</label>
                    <input id="contactEmail" type="email" placeholder={t('yourEmail')} required/>
                    <label htmlFor="contactMessage">{t('yourMessage')}</label>
                    <textarea rows="8" placeholder={t('yourMessage')}></textarea>
                    <button className="sendMessage" type="submit">{t('send')}</button>
                </form>
            </div>
        </div>
    )
}

export default Contact