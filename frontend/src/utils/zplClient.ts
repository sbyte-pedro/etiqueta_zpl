import { DesignElement } from '../types';

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
  const res = await fetch('/api/generate-zpl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return data.zpl as string;
}

export async function parseZpl(zpl: string): Promise<ParseResult> {
  const res = await fetch('/api/parse-zpl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ zpl }),
  });
  return res.json();
}

export async function previewZpl(zpl: string, labelWidth: number, labelHeight: number): Promise<string> {
  const res = await fetch('/api/preview', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ zpl, labelWidth, labelHeight }),
  });
  const blob = await res.blob();
  return URL.createObjectURL(blob);
}
