require('dotenv').config()
const mongoClient = require('./db')
const express = require('express')
const cors = require('cors')
const router = require('./rotes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const PORT = process.env.PORT || 5000

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
        await mongoClient.connect()
        console.log(`Connection to MongoDB cluster successful`)
        app.listen(PORT, () => {
            console.log("Server started on PORT: ", PORT)
        })


        // await mongoClient.db().createCollection('games')
        // await mongoClient.db().collection('games').insertMany([{game:'football'},
        //     {game:'tennis'},{game:'chess'},])

        // const games = mongoClient.db().collection('games')
        //
        // const typeFootball = await games.findOne({game:'football'})
        // const allTypes = await games.find({}).toArray()
        // const obj = JSON.parse(JSON.stringify(allTypes));
        //
        // console.log('typeFootball: ', typeFootball)
        // console.log('allTypes: ', allTypes)
    } catch (e) {
        console.log('Unable to connect to the database:', e)
    }
}
start()
