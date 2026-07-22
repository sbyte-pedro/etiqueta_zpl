import { JwtPayload } from '../auth/authService';

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}
