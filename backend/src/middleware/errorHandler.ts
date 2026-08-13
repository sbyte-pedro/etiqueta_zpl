import { Request, Response, NextFunction } from 'express';
import logger from '../logger';
import { isProduction } from '../config';

/**
 * Central error handler — must be registered last in app.ts (4-arg signature).
 * Catches anything a route passes to next(err), logs it, and returns a
 * consistent JSON 500. Domain errors (404, 409) are still handled inline in
 * their own routes; this handler is the backstop for unexpected failures.
 */
export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  logger.error({ err }, 'Unhandled request error');
  const message = !isProduction && err instanceof Error ? err.message : 'Internal server error';
  res.status(500).json({ error: message });
}
