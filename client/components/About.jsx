import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'



function About() {
    const { t, i18n } = useTranslation()

    return(
        <div className="about container">
            <h1>{t('aboutMe')}</h1>
            <p>{t('about1')}</p>
            <p>{t('about2')}</p>
            <p>{t('about3')}</p>
        </div>
    )
}

export default About