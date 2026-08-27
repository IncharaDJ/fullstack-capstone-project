require("dotenv").config();

const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

async function connectDB() {
try {
await client.connect();

```
const db = client.db("giftdb");

console.log("Connected to MongoDB database: giftdb");

return db;
```

} catch (error) {
console.error("MongoDB connection error:", error);
throw error;
}
}

module.exports = connectDB;
