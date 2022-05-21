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
        // const football = mongoClient.db().collection('football')
        // await mongoClient.db().createCollection('games')

        // await mongoClient.db().collection('games').insertMany([{game:'football'},
        //     {game:'tennis'},{game:'chess'},])

        const games = mongoClient.db().collection('games')

        const typeFootball = await games.findOne({game:'football'})
        const allTypes = await games.find()

        console.log('types: ', typeFootball)
        console.log('allTypes: ', allTypes)
    } catch (e) {
        console.log('Unable to connect to the database:', e)
    }
}
start()
