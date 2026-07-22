import { create } from 'zustand';
import { getToken, saveToken, clearToken, apiLogin, apiRegister } from '../utils/authClient';

interface AuthStore {
  token: string | null;
  login(username: string, password: string): Promise<void>;
  register(username: string, password: string): Promise<void>;
  logout(): void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  token: getToken(),

  async login(username, password) {
    const token = await apiLogin(username, password);
    saveToken(token);
    set({ token });
  },

  async register(username, password) {
    await apiRegister(username, password);
    const token = await apiLogin(username, password);
    saveToken(token);
    set({ token });
  },

  logout() {
    clearToken();
    set({ token: null });
  },
}));
