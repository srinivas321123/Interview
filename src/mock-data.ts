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

export const MOCK_TICKETS: Ticket[] = [
  {
    id: '1',
    title: 'Login page shows blank screen on Safari',
    description:
      'Users on Safari 17.x report seeing a blank white screen after entering credentials. Console shows hydration mismatch error.',
    status: 'open',
    priority: 'critical',
    assignee: 'Alice Chen',
    createdAt: '2026-05-30T10:00:00Z',
  },
  {
    id: '2',
    title: 'Update dependency versions for Q2 release',
    description:
      'React 19, TypeScript 6, and Vite 7 need to be updated. Run full regression after upgrade.',
    status: 'in-progress',
    priority: 'high',
    assignee: 'Bob Smith',
    createdAt: '2026-05-28T14:30:00Z',
  },
  {
    id: '3',
    title: 'Add dark mode toggle to settings page',
    description:
      'Implement theme switcher using next-themes. Should persist preference to localStorage.',
    status: 'in-progress',
    priority: 'medium',
    assignee: 'Carol Davis',
    createdAt: '2026-05-25T09:15:00Z',
  },
  {
    id: '4',
    title: 'Fix table pagination off-by-one error',
    description:
      'When navigating to the last page, one extra empty row appears. Happens only when total items is a multiple of page size.',
    status: 'resolved',
    priority: 'low',
    assignee: 'Dave Wilson',
    createdAt: '2026-05-20T16:45:00Z',
  },
  {
    id: '5',
    title: 'Implement CSV export for reports',
    description:
      'Users need to export filtered report data as CSV. Should include all visible columns and respect current sort order.',
    status: 'open',
    priority: 'medium',
    assignee: 'Eve Johnson',
    createdAt: '2026-05-29T11:20:00Z',
  },
  {
    id: '6',
    title: 'Accessibility audit for form components',
    description:
      'WCAG 2.1 AA compliance check needed. Focus on form labels, error messages, and keyboard navigation.',
    status: 'open',
    priority: 'high',
    assignee: 'Frank Garcia',
    createdAt: '2026-05-27T08:00:00Z',
  },
  {
    id: '7',
    title: 'Remove deprecated API endpoints from client',
    description:
      'v1 API endpoints are being sunset. Migrate all fetch calls to v2 equivalents before July 1.',
    status: 'closed',
    priority: 'low',
    assignee: 'Grace Lee',
    createdAt: '2026-05-15T13:30:00Z',
  },
  {
    id: '8',
    title: 'Chart tooltip shows wrong date format',
    description:
      'Timezone conversion issue causes dates in chart tooltips to show previous day for UTC+ users.',
    status: 'open',
    priority: 'high',
    assignee: 'Alice Chen',
    createdAt: '2026-05-31T07:00:00Z',
  },
]
