import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import { useKeyboardShortcuts, type KeyboardShortcut } from './exercise-2'

function ShortcutHarness({
  shortcuts,
  enabled = true,
}: {
  shortcuts: KeyboardShortcut[]
  enabled?: boolean
}) {
  useKeyboardShortcuts(shortcuts, { enabled })
  return null
}

describe('useKeyboardShortcuts', () => {
  test('calls the handler for matching keys', () => {
    const handler = vi.fn()
    render(<ShortcutHarness shortcuts={[{ key: 'k', handler }]} />)

    fireEvent.keyDown(document, { key: 'k' })

    expect(handler).toHaveBeenCalledTimes(1)
  })

  test('does not call the handler for non-matching keys', () => {
    const handler = vi.fn()
    render(<ShortcutHarness shortcuts={[{ key: 'k', handler }]} />)

    fireEvent.keyDown(document, { key: 'x' })

    expect(handler).not.toHaveBeenCalled()
  })

  test('supports modifier keys', () => {
    const handler = vi.fn()
    render(<ShortcutHarness shortcuts={[{ key: 's', ctrl: true, handler }]} />)

    fireEvent.keyDown(document, { key: 's', ctrlKey: true })

    expect(handler).toHaveBeenCalledTimes(1)
  })

  test('does not fire when typing in an input', () => {
    const handler = vi.fn()
    render(
      <>
        <input aria-label="search" />
        <ShortcutHarness shortcuts={[{ key: 'k', handler }]} />
      </>,
    )

    const input = screen.getByLabelText('search')
    input.focus()
    fireEvent.keyDown(input, { key: 'k' })

    expect(handler).not.toHaveBeenCalled()
  })

  test('does not fire when disabled', () => {
    const handler = vi.fn()
    render(<ShortcutHarness shortcuts={[{ key: 'k', handler }]} enabled={false} />)

    fireEvent.keyDown(document, { key: 'k' })

    expect(handler).not.toHaveBeenCalled()
  })

  test('cleans up listener on unmount', () => {
    const handler = vi.fn()
    const { unmount } = render(<ShortcutHarness shortcuts={[{ key: 'k', handler }]} />)

    unmount()
    fireEvent.keyDown(document, { key: 'k' })

    expect(handler).not.toHaveBeenCalled()
  })

  test('uses the latest handler without re-subscribing', () => {
    const firstHandler = vi.fn()
    const secondHandler = vi.fn()
    const { rerender } = render(<ShortcutHarness shortcuts={[{ key: 'k', handler: firstHandler }]} />)

    rerender(<ShortcutHarness shortcuts={[{ key: 'k', handler: secondHandler }]} />)
    fireEvent.keyDown(document, { key: 'k' })

    expect(firstHandler).not.toHaveBeenCalled()
    expect(secondHandler).toHaveBeenCalledTimes(1)
  })

  test('matches keys case-insensitively', () => {
    const handler = vi.fn()
    render(<ShortcutHarness shortcuts={[{ key: 'Enter', handler }]} />)

    fireEvent.keyDown(document, { key: 'enter' })

    expect(handler).toHaveBeenCalledTimes(1)
  })
})
