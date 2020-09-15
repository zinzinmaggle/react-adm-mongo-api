// Import Dependencies
const url = require('url')
const MongoClient = require('mongodb').MongoClient

// Create cached connection variable
let cachedDb = null

// A function for connecting to MongoDB,
// taking a single parameter of the connection string
async function connectToDatabase(uri) {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb
  }

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db(url.parse(uri).pathname.substr(1))

  // Cache the database connection and return the connection
  cachedDb = db
  return db
}

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {

  // Get a database connection, cached or otherwise,
  // using the connection string environment variable as the argument
  const db = await connectToDatabase(process.env.MONGODB_URI)

  // Select the "users" collection from the database
  const collection = await db.collection('user')

  const { end, order,sort,start } = req.query

  let users = await collection.find({}).toArray();
  
  switch(req.method){
    case 'GET':
        result = await collection.findOne({'_id' : req.query.id});
        res.status(200).json(result);
      break;
    case 'PUT':
      result =  await collection.update({'_id' : req.query.id}, req.body);
      res.redirect('/user')
      break;
    case 'DELETE':
      result = await collection.insert(req.body)
      res.redirect('/user')
      break;
  }

  // Select the users collection from the database
  // Respond with a JSON string of all users in the collection
}