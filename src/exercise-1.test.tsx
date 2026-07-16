import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test, vi } from 'vitest'

import { TicketCard } from './exercise-1'
import { MOCK_TICKETS } from './mock-data'

describe('TicketCard', () => {
  const ticket = MOCK_TICKETS[0] // critical priority, open status

  test('renders the ticket title', () => {
    render(<TicketCard ticket={ticket} />)
    expect(screen.getByText(ticket.title)).toBeInTheDocument()
  })

  test('renders the ticket description', () => {
    render(<TicketCard ticket={ticket} />)
    expect(screen.getByText(ticket.description)).toBeInTheDocument()
  })

  test('renders assignee name', () => {
    render(<TicketCard ticket={ticket} />)
    expect(screen.getByText(ticket.assignee)).toBeInTheDocument()
  })

  test('renders a status badge with the ticket status text', () => {
    render(<TicketCard ticket={ticket} />)
    expect(screen.getByText(ticket.status)).toBeInTheDocument()
  })

  test('renders an action button that calls onStatusChange with next status', async () => {
    const user = userEvent.setup()
    const onStatusChange = vi.fn()
    render(<TicketCard ticket={ticket} onStatusChange={onStatusChange} />)

    const button = screen.getByRole('button')
    await user.click(button)

    expect(onStatusChange).toHaveBeenCalledTimes(1)
    expect(onStatusChange).toHaveBeenCalledWith(ticket.id, 'in-progress')
  })

  test('renders correct next status for in-progress ticket', async () => {
    const user = userEvent.setup()
    const inProgressTicket = MOCK_TICKETS[1] // in-progress status
    const onStatusChange = vi.fn()
    render(<TicketCard ticket={inProgressTicket} onStatusChange={onStatusChange} />)

    const button = screen.getByRole('button')
    await user.click(button)

    expect(onStatusChange).toHaveBeenCalledWith(inProgressTicket.id, 'resolved')
  })

  test('applies a left border color based on priority', () => {
    const { container } = render(<TicketCard ticket={ticket} />)

    // critical priority should have a red left border class
    const card = container.querySelector('[data-slot="card"]')
    expect(card?.className).toMatch(/border-l-red/)
  })

  test('applies different border color for low priority', () => {
    const lowTicket = MOCK_TICKETS[3] // low priority
    const { container } = render(<TicketCard ticket={lowTicket} />)

    const card = container.querySelector('[data-slot="card"]')
    expect(card?.className).toMatch(/border-l-green/)
  })

  test('accepts and applies className prop', () => {
    const { container } = render(<TicketCard ticket={ticket} className="my-custom-class" />)

    const card = container.querySelector('[data-slot="card"]')
    expect(card?.className).toContain('my-custom-class')
  })

  test('does not crash when onStatusChange is not provided', async () => {
    const user = userEvent.setup()
    render(<TicketCard ticket={ticket} />)
    const button = screen.getByRole('button')

    // Should not throw
    await user.click(button)
  })
})
