import app from "./server.js"
import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviewsDAO.js"
import dotenv from "dotenv";
dotenv.config();

const MongoClient = mongodb.MongoClient
const mongo_username = process.env['MONGO_USERNAME']
const mongo_password = process.env['MONGO_PASSWORD']

const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.yqfx8zs.mongodb.net/?retryWrites=true&w=majority`

const port = 8000

MongoClient.connect(
  uri,
  {
    // Maximo de pessoas que podem se conectar ao mesmo tempo
    maxPoolSize: 50,
    // Maximo de tempo que o banco de dados pode ficar sem conexão
    wtimeoutMS: 2500,
    // useNewUrlParser: true
  })
.catch(error => {
  console.error(err.stack)
  process.exit(1)
})
.then(async client => {
  await ReviewsDAO.injectDB(client)
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
})