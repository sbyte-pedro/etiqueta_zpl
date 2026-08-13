import { API_BASE, getToken, triggerOn401, refreshAccessToken } from './authClient';

export function authHeaders(): Record<string, string> {
  const token = getToken();
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

/**
 * Fetch JSON from an API endpoint, with JWT auth attached.
 * On 401 it attempts a single silent token refresh and retries once; if that
 * fails it triggers auto-logout. Also handles 204 no-content and JSON errors.
 */
export async function apiFetch<T>(path: string, opts?: RequestInit, _retry = false): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...opts,
    headers: { ...authHeaders(), ...(opts?.headers ?? {}) },
  });
  if (res.status === 401) {
    if (!_retry && (await refreshAccessToken())) {
      return apiFetch<T>(path, opts, true);
    }
    triggerOn401();
    throw new Error('Session expired. Please log in again.');
  }
  if (res.status === 204) {
    if (!res.ok) throw new Error('Request failed');
    return undefined as T;
  }
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) throw new Error(data?.error ?? 'Request failed');
  return data as T;
}

/**
 * Fetch a binary response (image, PDF, etc.), with JWT auth attached.
 * On 401 it attempts a single silent token refresh and retries once, then
 * falls back to auto-logout.
 */
export async function apiFetchBlob(path: string, opts?: RequestInit, _retry = false): Promise<Blob> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...opts,
    headers: { ...authHeaders(), ...(opts?.headers ?? {}) },
  });
  if (res.status === 401) {
    if (!_retry && (await refreshAccessToken())) {
      return apiFetchBlob(path, opts, true);
    }
    triggerOn401();
    throw new Error('Session expired. Please log in again.');
  }
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `Request failed (${res.status})` }));
    throw new Error(err.error ?? `Request failed (${res.status})`);
  }
  return res.blob();
}
