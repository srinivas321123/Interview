// ---------------------------------------------------------------------------
// Exercise 2: useKeyboardShortcuts Hook  [TDD - write your own tests]
// ---------------------------------------------------------------------------
//
// Implement a hook that registers global keyboard shortcuts with proper
// cleanup and avoids stale closures using the useEffectEvent pattern.
//
// This exercise uses TDD. Create exercise-2.test.tsx yourself.
// Write tests first, then implement the hook to make them pass.
// Run tests with: pnpm test
//
// Suggested test cases:
//   - calls handler when matching key is pressed
//   - does not call handler for non-matching keys
//   - matches modifier keys (ctrl, meta, shift, alt)
//   - does not fire when user is typing in an input or textarea
//   - does not fire when enabled is false
//   - cleans up listener on unmount
//   - uses latest handler without re-subscribing (no stale closure)
//   - key matching is case-insensitive
//
// Requirements:
//
// 1. Accept an array of KeyboardShortcut objects and an options bag.
//    Return nothing (void hook).
//
// 2. Register a single "keydown" listener on document.
//    Clean it up on unmount (return a cleanup function from useEffect).
//
// 3. Use a ref to hold the latest shortcuts array so that:
//    - Handlers always see fresh props/state (no stale closures)
//    - The effect does NOT re-run when handler functions change
//    - The listener is registered once (or when "enabled" changes)
//    This is the "useEffectEvent" polyfill pattern:
//      const ref = useRef(shortcuts)
//      useEffect(() => { ref.current = shortcuts })
//
// 4. When a keydown fires:
//    - Skip if the active element is an input, textarea, or contenteditable
//    - Match event.key (case-insensitive) plus modifier flags
//    - If matched: call handler() and event.preventDefault()
//
// 5. Support an "enabled" flag (default true). When false, remove/skip
//    the listener entirely.
//
// ---------------------------------------------------------------------------

import { useEffect, useRef } from 'react'

export interface KeyboardShortcut {
  key: string
  ctrl?: boolean
  shift?: boolean
  alt?: boolean
  meta?: boolean
  handler: () => void
  description?: string
}

export interface UseKeyboardShortcutsOptions {
  enabled?: boolean
}

export function useKeyboardShortcuts(
  shortcuts: KeyboardShortcut[],
  options: UseKeyboardShortcutsOptions = {},
) {
  // Implement here. Make the tests in exercise-2.test.tsx pass.
}
