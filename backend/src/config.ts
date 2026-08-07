/**
 * Central configuration + env-var resolution.
 *
 * A single source of truth for the JWT secret and environment mode so that
 * auth signing and verification can never drift apart, and so that
 * dev-only conveniences (permissive CORS, verbose errors) are gated on
 * NODE_ENV in exactly one place.
 */

export const NODE_ENV = process.env.NODE_ENV ?? 'development';
export const isProduction = NODE_ENV === 'production';
export const isTest = NODE_ENV === 'test';

/**
 * The JWT signing/verification secret. In production a missing secret is a
 * hard error (see index.ts, which validates at boot). Outside production we
 * fall back to a well-known dev value so local dev and tests work without
 * extra setup.
 */
export const JWT_SECRET: string = (() => {
  const secret = process.env.JWT_SECRET;
  if (secret) return secret;
  if (isProduction) {
    // Should never reach here: index.ts refuses to boot without it in prod.
    throw new Error('JWT_SECRET env var is required in production');
  }
  return 'dev-secret';
})();

/** JWTs are signed and verified with HS256 only (pin the algorithm). */
export const JWT_ALGORITHM = 'HS256' as const;

/** Access-token lifetime. */
export const JWT_EXPIRES_IN = '60m' as const;

/** Allowed CORS origin for the frontend. */
export const FRONTEND_URL = process.env.FRONTEND_URL ?? 'http://localhost:5173';

/** Max accepted JSON request body size. Caps ZPL payloads sent for preview/export. */
export const MAX_BODY_SIZE = '512kb';

/** Upper bound on a single ZPL string field (characters). */
export const MAX_ZPL_LENGTH = 100_000;

/** Timeout (ms) for outbound requests to the Labelary API. */
export const LABELARY_TIMEOUT_MS = 10_000;

/** Base URL of the Labelary rendering API (HTTPS). */
export const LABELARY_BASE_URL = 'https://api.labelary.com/v1/printers/8dpmm/labels';
