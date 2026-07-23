import express from 'express';
import cors from 'cors';
import { authRouter } from './routes/auth';
import { authenticate } from './middleware/authenticate';
import { zplRouter } from './routes/zpl';
import { designsRouter } from './routes/designs';
import { healthRouter } from './routes/health';

const FRONTEND_URL = process.env.FRONTEND_URL ?? 'http://localhost:5173';

const app = express();
app.use(cors({
  origin: (origin, cb) => {
    // Allow requests with no origin (e.g. curl) and any localhost port in dev
    if (!origin || origin.startsWith('http://localhost:') || origin === FRONTEND_URL) {
      cb(null, true);
    } else {
      cb(new Error('Not allowed by CORS'));
    }
  },
}));
app.use(express.json());

app.use('/health', healthRouter);
app.use('/api/auth', authRouter);                          // public
app.use('/api/designs', authenticate, designsRouter);      // protected
app.use('/api', authenticate, zplRouter);                  // protected

export default app;
