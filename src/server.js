import { ENV } from './common/config.js';
import { app } from './app.js';

app.listen(ENV.PORT, () =>
  console.log(`App is running on http://localhost:${ENV.PORT}`)
);
