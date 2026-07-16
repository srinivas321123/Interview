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

export type TicketStatus = 'open' | 'in-progress' | 'resolved' | 'closed'
export type TicketPriority = 'low' | 'medium' | 'high' | 'critical'

export interface Ticket {
  id: string
  title: string
  description: string
  status: TicketStatus
  priority: TicketPriority
  assignee: string
  createdAt: string
}

export interface TicketCardProps {
  ticket: Ticket
  onStatusChange?: (id: string, status: TicketStatus) => void
  className?: string
}

const statusBadgeVariant: Record<TicketStatus, 'default' | 'secondary' | 'outline' | 'destructive'> = {
  open: 'default',
  'in-progress': 'secondary',
  resolved: 'outline',
  closed: 'destructive',
}

const priorityBorderClass: Record<TicketPriority, string> = {
  critical: 'border-l-red-500',
  high: 'border-l-orange-500',
  medium: 'border-l-yellow-500',
  low: 'border-l-green-500',
}

const nextStatusMap: Record<TicketStatus, TicketStatus> = {
  open: 'in-progress',
  'in-progress': 'resolved',
  resolved: 'closed',
  closed: 'closed',
}

export function TicketCard({ ticket, onStatusChange, className }: TicketCardProps) {
  const nextStatus = nextStatusMap[ticket.status]

  const handleClick = () => {
    onStatusChange?.(ticket.id, nextStatus)
  }

  return (
    <Card className={cn('border-l-4', priorityBorderClass[ticket.priority], className)}>
      <CardHeader className="flex-row items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <CardTitle className="mb-1">{ticket.title}</CardTitle>
          <CardDescription className="line-clamp-2">{ticket.description}</CardDescription>
        </div>
        <Badge variant={statusBadgeVariant[ticket.status]}>{ticket.status}</Badge>
      </CardHeader>

      <CardContent className="flex flex-col gap-1 text-muted-foreground">
        <div>
          Assignee: <span>{ticket.assignee}</span>
        </div>
        <div>{new Date(ticket.createdAt).toLocaleDateString()}</div>
      </CardContent>

      <CardFooter className="justify-end">
        <Button onClick={handleClick}>
          Advance to {nextStatus}
        </Button>
      </CardFooter>
    </Card>
  )
}
