const { MongoClient } = require('mongodb');

const url = "mongodb+srv://sadcat14:KHkOwhsZfJi0z9Wv@namastenode.a4bbu.mongodb.net/";
const client = new MongoClient(url);

const dbName = 'HelloWorld';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');
  
    // the following code examples can be pasted here...

    // Lets Insert a data
    const data = {
        firstname: "Virat",
        lastname: "Kohli",
        city: "Delhi",
        phone: "9586200014",
    };

    const insertResult = await collection.insertMany([data]);
    console.log('Inserted documents =>', insertResult);

    // Lets Read the data from databse
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    // count results
    const countResult = await collection.countDocuments({});
    console.log("Count of documents in the User Collection", countResult);


    // Find all documents with a filter first name 'Virat'
    const result = await collection.find({firstname:"Virat"}).toArray();
    console.log("Result =>", result);

  
    return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

/*
Go to mongodb website
Create a free M0 cluster
Create a user
Get the connection string
Install Mongo DB Compass
Set the connection between Compass and Atlas
install mongo DB in our app from npm "npm install mongodb" 
*/