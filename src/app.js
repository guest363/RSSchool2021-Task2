import express from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import { initEndpoitsREST } from './routes/api.js';

const app = express();
const swaggerDocument = YAML.load(new URL('../doc/api.yaml', import.meta.url));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

initEndpoitsREST(app);

export { app };
