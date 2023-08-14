import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ResumeDataContainer} from "./context/resumeData.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ResumeDataContainer.Provider>
        <App />
      </ResumeDataContainer.Provider>
  </React.StrictMode>,
)
