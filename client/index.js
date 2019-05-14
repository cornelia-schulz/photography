import React from 'react'
import ReactDom from 'react-dom'
import i18n from './i18n'

import App from './components/App'
import { I18nextProvider } from 'react-i18next';

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>,
    document.getElementById('app')
  )
})