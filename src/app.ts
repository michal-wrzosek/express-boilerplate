import express from 'express';
import bodyParser from 'body-parser';

export const getApp = () => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.get('/api/v1/test', (_, res) => {
    res.json({ ok: true });
  });

  return app;
};
