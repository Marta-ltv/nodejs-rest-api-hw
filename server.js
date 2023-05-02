const mongoose = require("mongoose");
const app = require('./app');

const { DB_HOST, PORT = 3000 } = process.env;


mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Connected MongoDB server");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });




// const { MongoClient, ServerApiVersion } = require('mongodb');
// const DB_HOST =
  // "mongodb+srv://Martina:QZsC7odZNnlYOYDA@cluster0.fcknohc.mongodb.net/db-contacts?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(DB_HOST, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
  //   await client.db("admin").command({ ping: 1 });
  //   console.log("Pinged your deployment. You successfully connected to MongoDB!");
  // } finally {
    // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
