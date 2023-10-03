import { MongoClient } from '@/app/api/mongodb';

const url = process.env.MONGODB_URL;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let database;

async function connectDatabase() {
  if (!client) {
    client = new MongoClient(url, options);
  }

  if (!client.isConnected()) {
    await client.connect();
  }

  database = client.db('Url_Shortener');
}

async function disconnectDatabase() {
  if (client.isConnected()) {
    await client.close();
  }
}

export { connectDatabase, disconnectDatabase, database };
