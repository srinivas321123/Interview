import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { MOCK_TICKETS } from './mock-data'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="mx-auto min-h-svh max-w-6xl p-6">
      <h1 className="text-2xl font-semibold">Ticket Dashboard</h1>
      <p className="text-muted-foreground mt-2 text-sm">
        {MOCK_TICKETS.length} tickets loaded. Start with exercise-1.tsx.
      </p>
    </div>
  </React.StrictMode>,
)
