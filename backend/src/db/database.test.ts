import { isUniqueViolation } from './database';

describe('isUniqueViolation', () => {
  it('detects a bare pg error with code 23505', () => {
    expect(isUniqueViolation({ code: '23505' })).toBe(true);
  });

  it('detects a Drizzle-wrapped error where the code is on .cause', () => {
    // drizzle-orm >=0.44 wraps driver errors in a DrizzleQueryError and puts
    // the original pg error (with the code) on `.cause`.
    const wrapped = Object.assign(new Error('Failed query: insert into "users" ...'), {
      cause: { code: '23505' },
    });
    expect(isUniqueViolation(wrapped)).toBe(true);
  });

  it('walks a multi-level cause chain', () => {
    const deep = { cause: { cause: { code: '23505' } } };
    expect(isUniqueViolation(deep)).toBe(true);
  });

  it('returns false for other pg error codes', () => {
    expect(isUniqueViolation({ code: '23503' })).toBe(false);
    expect(isUniqueViolation(new Error('boom'))).toBe(false);
    expect(isUniqueViolation(null)).toBe(false);
    expect(isUniqueViolation(undefined)).toBe(false);
  });
});
