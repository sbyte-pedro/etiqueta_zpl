import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JwtPayload } from '../auth/authService';
import { JWT_SECRET, JWT_ALGORITHM } from '../config';

export function authenticate(req: Request, res: Response, next: NextFunction): void {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Missing or invalid Authorization header' });
    return;
  }
  try {
    req.user = jwt.verify(header.slice(7), JWT_SECRET, {
      algorithms: [JWT_ALGORITHM],
    }) as JwtPayload;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}
