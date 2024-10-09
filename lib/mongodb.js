import { MongoClient } from 'mongodb';

// MongoDB connection string
const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let clientPromise;

// Use a global variable in development to avoid multiple connections
if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    clientPromise = client.connect();
    global._mongoClientPromise = clientPromise;
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;
