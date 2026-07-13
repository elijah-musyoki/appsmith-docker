const dbName = process.env.MONGO_DATABASE || 'appsmith';
const username = process.env.MONGODB_USERNAME || 'appsmith';
const password = process.env.MONGODB_PASSWORD || 'appSmithPassword';

db = db.getSiblingDB(dbName);

db.createUser({
  user: username,
  pwd: password,
  roles: [
    { role: 'readWrite', db: dbName },
    { role: 'dbAdmin', db: dbName },
  ],
});

print('non-root user ' + username + ' created with readWrite/dbAdmin on ' + dbName);
