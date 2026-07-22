import { DesignElement } from '../types';
import { getToken } from './authClient';

const API_BASE = (import.meta.env.VITE_API_URL as string | undefined) ?? '';

function authHeaders(): Record<string, string> {
  const token = getToken();
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
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
  const data = await res.json();
  return data.zpl as string;
}

export async function parseZpl(zpl: string): Promise<ParseResult> {
  const res = await fetch(`${API_BASE}/api/parse-zpl`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ zpl }),
  });
  return res.json();
}

export async function previewZpl(zpl: string, labelWidth: number, labelHeight: number): Promise<string> {
  const res = await fetch(`${API_BASE}/api/preview`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ zpl, labelWidth, labelHeight }),
  });
  const blob = await res.blob();
  return URL.createObjectURL(blob);
}
