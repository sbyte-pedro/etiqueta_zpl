import { apiFetch, apiFetchBlob } from './apiClient';
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
  const data = await apiFetch<{ zpl: string }>('/api/generate-zpl', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  return data.zpl;
}

export async function parseZpl(zpl: string): Promise<ParseResult> {
  return apiFetch('/api/parse-zpl', {
    method: 'POST',
    body: JSON.stringify({ zpl }),
  });
}

export async function previewZpl(zpl: string, labelWidth: number, labelHeight: number): Promise<string> {
  const blob = await apiFetchBlob('/api/preview', {
    method: 'POST',
    body: JSON.stringify({ zpl, labelWidth, labelHeight }),
  });
  return URL.createObjectURL(blob);
}

export type ExportFormat = 'png' | 'pdf' | 'epl' | 'zpl';

export async function exportZpl(
  zpl: string,
  labelWidth: number,
  labelHeight: number,
  format: ExportFormat,
): Promise<Blob> {
  return apiFetchBlob('/api/export', {
    method: 'POST',
    body: JSON.stringify({ zpl, labelWidth, labelHeight, format }),
  });
}
