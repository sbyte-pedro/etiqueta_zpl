import { Router, Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { registerUser, loginUser } from '../auth/authService';

export const authRouter = Router();

const CredentialsSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(6).max(72), // bcrypt silently truncates beyond 72 bytes
});

authRouter.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  const parsed = CredentialsSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.flatten() });
    return;
  }
  try {
    await registerUser(parsed.data.username, parsed.data.password);
    res.status(201).json({ message: 'User created' });
  } catch (e) {
    if (e instanceof Error && e.message === 'USERNAME_TAKEN') {
      res.status(409).json({ error: 'Username already taken' });
    } else {
      next(e);
    }
  }
});

authRouter.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  const parsed = CredentialsSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.flatten() });
    return;
  }
  try {
    const token = await loginUser(parsed.data.username, parsed.data.password);
    res.json({ token });
  } catch (e) {
    if (e instanceof Error && e.message === 'INVALID_CREDENTIALS') {
      res.status(401).json({ error: 'Invalid username or password' });
    } else {
      next(e);
    }
  }
});
