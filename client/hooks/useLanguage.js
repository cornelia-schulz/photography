import React, { createContext, useContext, useMemo, useState } from 'react'

const LanguageContext = createContext()

function useLanguage() {
  const context = useContext(LanguageContext)
  console.log('context', context)
  if (!context) {
    throw new Error(`useLanguage must be used within a LanguageProvider`)
  }
  const [language, setLanguage] = context
  return {
    language,
    setLanguage,
  }
}

function LanguageProvider(props) {
  const [language, setLanguage] = useState('')
  const value = useMemo(() => [language, setLanguage], [language])
  return <LanguageContext.Provider value={value} {...props} />
}
export {LanguageProvider, useLanguage}