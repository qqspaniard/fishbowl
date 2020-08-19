import { MongoClient } from "./deps.ts";

const client = new MongoClient();
client.connectWithUri(
  "mongodb+srv://fishbowl:I9uBJzwkOEcJpLPe@cluster0.lqzih.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority",
);

const db = client.database("fishbowl");

export const usersCollection = db.collection("users");
