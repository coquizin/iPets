import { MongoClient } from "mongodb";

const database_url = process.env.DATABASE_URL;

const client = new MongoClient(database_url, {
  userNewParser: true,
  useUnifiedTopology: true,
});

export default async function connect() {
  await client.connect();

  const db = client.db("iPets");

  return { db, client };
}
