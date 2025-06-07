import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { getEnvVar } from './utils/getEnvVar.js';

export const setupServer = () => {
  const app = express();

  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use((error, req, res, next) => {
    res.json({
      errorMessage: error.message,
      id: req.id,
    });
  });

  app.use((req, res) => {
    res.status(404).json({
      message: 'Not Found',
      status: 404,
    });
  });

  const PORT = Number(getEnvVar('PORT', '3000'));

  app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
  });
};
