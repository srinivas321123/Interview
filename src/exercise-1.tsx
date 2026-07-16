// ---------------------------------------------------------------------------
// Exercise 1: TicketCard Component (~12 min)  [tests provided]
// ---------------------------------------------------------------------------
//
// Build a TicketCard component that renders a single support ticket using
// the existing UI primitives in this project (Card, Badge, Button).
//
// Tests are in exercise-1.test.tsx. Run: pnpm test
// Your goal is to make all tests pass.
//
// Requirements:
//
// 1. Define TypeScript types:
//    - TicketStatus: 'open' | 'in-progress' | 'resolved' | 'closed'
//    - TicketPriority: 'low' | 'medium' | 'high' | 'critical'
//    - Ticket: id, title, description, status, priority, assignee, createdAt
//    - TicketCardProps: ticket, onStatusChange callback, className
//
// 2. Render using Card, CardHeader, CardTitle, CardDescription,
//    CardContent, CardFooter, Badge, Button from @/components/ui/*
//
// 3. Map status to badge variant:
//    open -> "default", in-progress -> "secondary",
//    resolved -> "outline", closed -> "destructive"
//
// 4. Map priority to a colored left border:
//    critical -> red, high -> orange, medium -> yellow, low -> green
//
// 5. Show title, description (truncated to 2 lines), assignee, date,
//    and an action button that advances status to the next state.
//
// ---------------------------------------------------------------------------

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// Define your types here

// Define your mappings here (status -> badge variant, priority -> border class)

// Implement TicketCard
export function TicketCard() {
  return null
}
