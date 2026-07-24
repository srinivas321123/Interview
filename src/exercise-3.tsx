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

import { useMemo, useRef, useState } from 'react'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

import { TicketCard, type Ticket, type TicketStatus } from './exercise-1'
import { useKeyboardShortcuts } from './exercise-2'
import { MOCK_TICKETS } from './mock-data'

export function TicketDashboard() {
  const [tickets, setTickets] = useState<Ticket[]>(MOCK_TICKETS)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const filteredTickets = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return tickets
    }

    return tickets.filter((ticket) => {
      const haystack = `${ticket.title} ${ticket.description}`.toLowerCase()
      return haystack.includes(normalizedQuery)
    })
  }, [query, tickets])

  const handleStatusChange = (id: string, status: TicketStatus) => {
    setTickets((currentTickets) =>
      currentTickets.map((ticket) => (ticket.id === id ? { ...ticket, status } : ticket)),
    )
  }

  const shortcuts = [
    {
      key: '/',
      handler: () => inputRef.current?.focus(),
    },
    {
      key: 'Escape',
      handler: () => {
        setQuery('')
        inputRef.current?.blur()
      },
    },
  ]

  useKeyboardShortcuts(shortcuts)

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-4">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Support Tickets</h2>
        <p className="text-muted-foreground text-sm">Search tickets and update their status.</p>
      </div>

      <Command className="bg-background overflow-hidden rounded-xl border">
        <CommandInput
          ref={inputRef}
          placeholder="Search tickets..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList className="max-h-none overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {filteredTickets.map((ticket) => (
              <CommandItem key={ticket.id} value={`${ticket.title} ${ticket.description}`}>
                <div className="w-full">
                  <TicketCard ticket={ticket} onStatusChange={handleStatusChange} />
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}
