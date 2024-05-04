var mongoose = require('mongoose');
const db = require("../config/env/development");
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://admin:admin%40123@cluster0.r5inff3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/cryovault";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });





// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }

// run().catch(console.dir);

// mongodb+srv://admin:admin%40123@cluster0.r5inff3.mongodb.net/cryovault-dev?retryWrites=true&w=majority&appName=Cluster0
const dbConnecting = mongoose.connect(db.dbConnection)
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })

module.exports = dbConnecting
