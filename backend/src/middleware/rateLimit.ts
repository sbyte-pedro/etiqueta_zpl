import rateLimit from 'express-rate-limit';
import { isTest } from '../config';

/**
 * Rate limiters. Disabled under NODE_ENV=test so the suite isn't throttled.
 * `skip` short-circuits the middleware entirely in that case.
 */

/**
 * Tight limiter for authentication endpoints (login/register) to blunt
 * credential brute-force attempts. 10 requests / 15 min / IP.
 */
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'Too many attempts, please try again later' },
  skip: () => isTest,
});

/**
 * Limiter for the Labelary proxy endpoints, which relay arbitrary bodies to a
 * third party. 60 requests / min / IP keeps the relay from being abused as an
 * amplification vector while staying generous for interactive preview.
 */
export const proxyLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 60,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'Too many requests, please slow down' },
  skip: () => isTest,
});
