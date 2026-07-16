import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { TicketDashboard } from './exercise-3'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="min-h-svh bg-background p-6">
      <TicketDashboard />
    </div>
  </React.StrictMode>,
)
