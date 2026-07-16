// ---------------------------------------------------------------------------
// Exercise 3: Ticket Search Dashboard (~18 min)
// ---------------------------------------------------------------------------
//
// Compose Exercise 1 (TicketCard) and Exercise 2 (useKeyboardShortcuts)
// together with the shadcn Command component to build a searchable ticket
// dashboard.
//
// Use the Command component from shadcn:
//   https://ui.shadcn.com/docs/components/base/command
//
// Installing and setting up Command is part of this exercise.
// (hint: npx shadcn@latest add command)
//
// Requirements:
//
// 1. Add the Command component to the project using shadcn CLI.
//
// 2. Build a TicketDashboard component that renders:
//    - A Command-based search bar at the top (CommandInput for the query)
//    - A list of TicketCards filtered by the search query
//    - Use CommandList, CommandEmpty, CommandGroup, CommandItem to
//      structure the results
//
// 3. Wire keyboard shortcuts using your useKeyboardShortcuts hook:
//    - "/" focuses the command input
//    - "Escape" clears the query and blurs
//
// 4. Filtering logic:
//    - Case-insensitive match on ticket title and description
//    - Show a "No results" empty state via CommandEmpty
//
// 5. When a ticket's action button is clicked, advance its status
//    in local state.
//
// 6. Import mock data from ./mock-data
//
// ---------------------------------------------------------------------------

import { useState, useRef } from 'react'

import type { Ticket, TicketStatus } from './mock-data'
import { MOCK_TICKETS } from './mock-data'

// Import your TicketCard from exercise-1
// Import your useKeyboardShortcuts from exercise-2
// Install and import Command components from @/components/ui/command

export function TicketDashboard() {
  // Implement here
  return null
}
