require('dotenv').config()
const {MongoClient, ServerApiVersion} = require('mongodb');
const express = require('express')
const cors = require('cors')
const router = require('./rotes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const PORT = process.env.PORT || 5000
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hvlii.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true, serverApi: ServerApiVersion.v1
});
const app = express()
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
)
app.use(express.json())
app.use('/api', router)
app.use(errorHandler) // must be on the last place (last MiddleWare)

const start = async () => {
    try {
        await client.connect()
        console.log(`Connection to MongoDB cluster successful`)
        app.listen(PORT, () => {
            console.log("Server started on PORT: ", PORT)
        })
        const football = client.db().collection('footsball')
        const competition = await football.findOne({home: "Dinamo"})
        console.log(competition)
    } catch (e) {
        console.log('Unable to connect to the database:', e)
    }
}
start()
