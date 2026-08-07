import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { authRouter } from './routes/auth';
import { authenticate } from './middleware/authenticate';
import { authLimiter, proxyLimiter } from './middleware/rateLimit';
import { zplRouter } from './routes/zpl';
import { designsRouter } from './routes/designs';
import { healthRouter } from './routes/health';
import { FRONTEND_URL, isProduction, MAX_BODY_SIZE } from './config';

const app = express();

// Security headers (CSP, HSTS, X-Content-Type-Options, etc.)
app.use(helmet());

app.use(cors({
  origin: (origin, cb) => {
    // Requests with no origin (curl, same-origin, server-to-server) are allowed.
    if (!origin) {
      cb(null, true);
      return;
    }
    // In production, only the configured frontend origin is permitted. The
    // permissive localhost wildcard is a dev-only convenience.
    if (origin === FRONTEND_URL || (!isProduction && origin.startsWith('http://localhost:'))) {
      cb(null, true);
    } else {
      cb(new Error('Not allowed by CORS'));
    }
  },
}));

app.use(express.json({ limit: MAX_BODY_SIZE }));

app.use('/health', healthRouter);
app.use('/api/auth', authLimiter, authRouter);            // public, rate-limited
app.use('/api/designs', authenticate, designsRouter);     // protected
app.use('/api', authenticate, proxyLimiter, zplRouter);   // protected, rate-limited

export default app;
