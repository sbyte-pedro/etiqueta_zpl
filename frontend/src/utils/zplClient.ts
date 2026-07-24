import { DesignElement } from '../types';
import { getToken, triggerOn401 } from './authClient';

const API_BASE = (import.meta.env.VITE_API_URL as string | undefined) ?? '';

function authHeaders(): Record<string, string> {
  const token = getToken();
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function handleResponse<T>(res: Response): Promise<T> {
  if (res.status === 401) { triggerOn401(); throw new Error('Session expired. Please log in again.'); }
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ?? `Request failed (${res.status})`);
  return data as T;
}

export interface GeneratePayload {
  labelWidth: number;
  labelHeight: number;
  elements: DesignElement[];
}

export interface ParseResult {
  labelWidth: number;
  labelHeight: number;
  elements: DesignElement[];
  unknownCommands: string[];
}

export async function generateZpl(payload: GeneratePayload): Promise<string> {
  const res = await fetch(`${API_BASE}/api/generate-zpl`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(payload),
  });
  const data = await handleResponse<{ zpl: string }>(res);
  return data.zpl;
}

export async function parseZpl(zpl: string): Promise<ParseResult> {
  const res = await fetch(`${API_BASE}/api/parse-zpl`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ zpl }),
  });
  return handleResponse<ParseResult>(res);
}

export async function previewZpl(zpl: string, labelWidth: number, labelHeight: number): Promise<string> {
  const res = await fetch(`${API_BASE}/api/preview`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ zpl, labelWidth, labelHeight }),
  });
  if (res.status === 401) { triggerOn401(); throw new Error('Session expired. Please log in again.'); }
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Preview failed' }));
    throw new Error(err.error ?? `Preview failed (${res.status})`);
  }
  const blob = await res.blob();
  return URL.createObjectURL(blob);
}

export type ExportFormat = 'png' | 'pdf' | 'epl' | 'zpl';

export async function exportZpl(
  zpl: string,
  labelWidth: number,
  labelHeight: number,
  format: ExportFormat,
): Promise<Blob> {
  const res = await fetch(`${API_BASE}/api/export`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ zpl, labelWidth, labelHeight, format }),
  });
  if (res.status === 401) { triggerOn401(); throw new Error('Session expired. Please log in again.'); }
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Export failed' }));
    throw new Error(err.error ?? `Export failed (${res.status})`);
  }
  return res.blob();
}
