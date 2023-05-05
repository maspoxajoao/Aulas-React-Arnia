import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorld, HelloWorld2 } from './components/HelloWolrd'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <HelloWorld/>
        <HelloWorld2/>
  </React.StrictMode>,
)
