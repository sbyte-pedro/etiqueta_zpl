import express from 'express';
import cors from 'cors';
import { authRouter } from './routes/auth';
import { authenticate } from './middleware/authenticate';
import { zplRouter } from './routes/zpl';
import { designsRouter } from './routes/designs';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);                          // public
app.use('/api/designs', authenticate, designsRouter);      // protected
app.use('/api', authenticate, zplRouter);                  // protected

export default app;
