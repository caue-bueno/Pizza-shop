import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app'
import { enableNSW } from './api/mocks'

enableNSW().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
