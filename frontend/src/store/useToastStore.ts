import { create } from 'zustand';

export type ToastType = 'success' | 'error' | 'info';

export interface Toast {
  id: number;
  type: ToastType;
  message: string;
}

interface ToastStore {
  toasts: Toast[];
  addToast(type: ToastType, message: string): void;
  removeToast(id: number): void;
}

const AUTO_DISMISS_MS = 4000;
let nextId = 0;

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],

  addToast(type, message) {
    const id = ++nextId;
    set((s) => ({ toasts: [...s.toasts, { id, type, message }] }));
    setTimeout(() => {
      set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) }));
    }, AUTO_DISMISS_MS);
  },

  removeToast(id) {
    set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) }));
  },
}));

/** Ergonomic helpers for firing toasts from anywhere (stores, event handlers). */
export const toast = {
  success: (message: string) => useToastStore.getState().addToast('success', message),
  error: (message: string) => useToastStore.getState().addToast('error', message),
  info: (message: string) => useToastStore.getState().addToast('info', message),
};
