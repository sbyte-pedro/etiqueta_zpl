import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pinoHttp from 'pino-http';
import { authRouter } from './routes/auth';
import { authenticate } from './middleware/authenticate';
import { authLimiter, proxyLimiter } from './middleware/rateLimit';
import { errorHandler } from './middleware/errorHandler';
import { zplRouter } from './routes/zpl';
import { designsRouter } from './routes/designs';
import { healthRouter } from './routes/health';
import logger from './logger';
import { FRONTEND_URL, isProduction, MAX_BODY_SIZE } from './config';

const app = express();

// Security headers (CSP, HSTS, X-Content-Type-Options, etc.)
app.use(helmet());

// Structured HTTP request logging
app.use(pinoHttp({ logger }));

app.use(cors({
  origin: (origin, cb) => {
    if (!origin) {
      cb(null, true);
      return;
    }
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

// Centralized error handler — must be last
app.use(errorHandler);

export default app;
