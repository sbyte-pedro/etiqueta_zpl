import { useKeyboardShortcuts } from '../hooks/useKeyboardShortcuts';

/** Mounts the global canvas keyboard shortcuts for as long as it is rendered. */
export function KeyboardShortcuts() {
  useKeyboardShortcuts();
  return null;
}
