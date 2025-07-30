import { AuthUser } from '../types/auth';

const BASE_URL = 'http://localhost:5000/api/auth';

export const authService = {
  async login(email: string, password: string): Promise<AuthUser> {
    const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      credentials: 'include', // Important for cookies
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error((await res.json()).message || 'Login failed');
    return await res.json();
  },

  async register(name: string, email: string, password: string): Promise<AuthUser> {
    const res = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) throw new Error((await res.json()).message || 'Register failed');
    return await res.json();
  },

  async logout(): Promise<void> {
    const res = await fetch(`${BASE_URL}/logout`, {
      method: 'POST',
      credentials: 'include',
    });
    if (!res.ok) throw new Error('Logout failed');
  },

  async getMe(): Promise<AuthUser | null> {
    const res = await fetch(`${BASE_URL}/me`, {
      method: 'GET',
      credentials: 'include',
    });

    if (res.status === 401) return null;
    if (!res.ok) throw new Error('Failed to get user');
    return await res.json();
  }
};
