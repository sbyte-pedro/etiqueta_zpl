import { initDb } from './db/database';
import app from './app';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET env var is required');
}

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  throw new Error('DATABASE_URL env var is required');
}

const PORT = process.env.PORT ?? '3001';

initDb().then(() => {
  app.listen(Number(PORT), () => console.log(`Backend running on port ${PORT}`));
}).catch((err) => {
  console.error('Failed to initialize database:', err);
  process.exit(1);
});
