import express from 'express';
import cors from 'cors';
import { zplRouter } from './routes/zpl';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', zplRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
