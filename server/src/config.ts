export const serverPort = process.env.SERVER_INTERNAL_PORT || 3000;
export const dbServiceName = process.env.MONGODB_SERVICE_NAME || 'mongo';
export const dbPort = process.env.MONGODB_INTERNAL_PORT || 27017;
export const dbLogin = process.env.MONGODB_LOGIN || 'root';
export const dbPassword = process.env.MONGODB_PASSWORD || 'example';
export const dbName = process.env.DB_NAME || 'graff-test';
export const mongoDbConnectionUrl = `mongodb://${dbLogin}:${dbPassword}@${dbServiceName}:${dbPort}/`;
export const clientPort = process.env.CLIENT_EXTERNAL_PORT || 8000;
