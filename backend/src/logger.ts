import pino from 'pino';
import { isProduction } from './config';

const logger = pino({
  level: process.env.LOG_LEVEL ?? 'info',
  // Human-readable in dev; pure JSON in production for log aggregators.
  transport: isProduction ? undefined : { target: 'pino-pretty' },
});

export default logger;
