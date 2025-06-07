import { initMongoDbConnection } from './db/initMongoDbConnection.js';
import { setupServer } from './server.js';

const bootstrap = async () => {
  await initMongoDbConnection();
  setupServer();
};

bootstrap();
