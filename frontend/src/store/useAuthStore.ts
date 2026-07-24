import { create } from 'zustand';
import { getToken, saveToken, clearToken, isTokenExpired, registerOn401Handler, apiLogin, apiRegister } from '../utils/authClient';

interface AuthStore {
  token: string | null;
  login(username: string, password: string): Promise<void>;
  register(username: string, password: string): Promise<void>;
  logout(): void;
}

function loadInitialToken(): string | null {
  const token = getToken();
  if (!token || isTokenExpired(token)) {
    clearToken();
    return null;
  }
  return token;
}

export const useAuthStore = create<AuthStore>((set, get) => {
  const store = {
    token: loadInitialToken(),

    async login(username: string, password: string) {
      const token = await apiLogin(username, password);
      saveToken(token);
      set({ token });
    },

    async register(username: string, password: string) {
      await apiRegister(username, password);
      const token = await apiLogin(username, password);
      saveToken(token);
      set({ token });
    },

    logout() {
      clearToken();
      set({ token: null });
    },
  };

  // When any API call gets a 401, log the user out automatically
  registerOn401Handler(() => get().logout());

  return store;
});
