import { getToken } from './authClient';

function authHeaders(): Record<string, string> {
  const token = getToken();
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export interface DesignSummary {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  versionCount: number;
}

export interface VersionSummary {
  id: number;
  versionNumber: number;
  createdAt: string;
}

export interface VersionDetail {
  id: number;
  versionNumber: number;
  zpl: string;
  elements: object[];
  labelWidth: number;
  labelHeight: number;
  createdAt: string;
}

export interface DesignPayload {
  zpl: string;
  elements: object[];
  labelWidth: number;
  labelHeight: number;
}

async function handleResponse<T>(res: Response): Promise<T> {
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ?? 'Request failed');
  return data as T;
}

export async function apiCreateDesign(name: string, payload: DesignPayload): Promise<{ designId: number; versionId: number }> {
  const res = await fetch('/api/designs', {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ name, ...payload }),
  });
  return handleResponse(res);
}

export async function apiListDesigns(): Promise<DesignSummary[]> {
  const res = await fetch('/api/designs', { headers: authHeaders() });
  return handleResponse(res);
}

export async function apiGetDesign(id: number): Promise<DesignSummary> {
  const res = await fetch(`/api/designs/${id}`, { headers: authHeaders() });
  return handleResponse(res);
}

export async function apiDeleteDesign(id: number): Promise<void> {
  const res = await fetch(`/api/designs/${id}`, { method: 'DELETE', headers: authHeaders() });
  if (!res.ok) { const d = await res.json(); throw new Error(d.error ?? 'Delete failed'); }
}

export async function apiCreateVersion(designId: number, payload: DesignPayload): Promise<VersionDetail> {
  const res = await fetch(`/api/designs/${designId}/versions`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(payload),
  });
  return handleResponse(res);
}

export async function apiListVersions(designId: number): Promise<VersionSummary[]> {
  const res = await fetch(`/api/designs/${designId}/versions`, { headers: authHeaders() });
  return handleResponse(res);
}

export async function apiGetVersion(designId: number, versionNumber: number): Promise<VersionDetail> {
  const res = await fetch(`/api/designs/${designId}/versions/${versionNumber}`, { headers: authHeaders() });
  return handleResponse(res);
}
