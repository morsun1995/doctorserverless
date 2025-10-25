const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
require('dotenv').config(); // Load environment variables from .env file
//---------------------------------------------------------mongodb connection
const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${userName}:${password}@cluster0.s4dmgvx.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const doctorsCollection = client.db("doctor").collection("menu");
    const doctorsUser = client.db("doctor").collection("user");

    app.get('/menu', async (req, res) => {
      const filter = {};
        const result = await doctorsCollection.find(filter).toArray();
      res.send(result);
    });
    app.get('/user', async (req, res) => {
      const filter = {};
        const result = await doctorsCollection.find(filter).toArray();
      res.send(result);
    });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
  }
}
run().catch(console.dir);
//---------------------------------------------------------mongodb connection
app.get('/', (req, res) => {
    res.send('Hello, World! my name is Anish');
});
module.exports = app;