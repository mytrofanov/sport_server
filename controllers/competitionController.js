const ApiError = require('../error/ApiError')
const mongoClient = require('.././db')
const {ObjectId} = require("mongodb");

const competitions = mongoClient.db().collection('competitions')
const types = mongoClient.db().collection('games')

class CompetitionController {
    async createCompetition(req, res, next) {
        let {competition, type, player1, player2, score, description} = req.query

        try {
            const newCompetition = await competitions.insertOne({
                'Назва змагання': competition, 'Тип змагання': type,
                'Ігрок1/Команда1': player1, 'Ігрок2/Команда2': player2, 'Рахунок': score, 'Коментарі': description
            })
            return res.json(newCompetition)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateCompetition(req, res, next) {
        let {CompetitionId, competition, type, player1, player2, score, description} = req.query
        try {
            if (CompetitionId) {
                const updatedCompetition = await competitions.updateOne({_id: ObjectId(CompetitionId)},
                    {
                        $set: {
                            'Назва змагання': competition, 'Тип змагання': type,
                            'Ігрок1/Команда1': player1, 'Ігрок2/Команда2': player2,
                            'Рахунок': score, 'Коментарі': description
                        }
                    })
                return res.json(updatedCompetition)
            } else res.json('The CompetitionId cannot be empty')
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteCompetition(req, res, next) {
        let {CompetitionId} = req.query
        try {
            if (CompetitionId) {
                const deletedCompetition = await competitions.deleteOne({_id: ObjectId(CompetitionId)})
                return res.json(deletedCompetition)
            } else res.json('The CompetitionId cannot be empty')
        }
 catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAllCompetitions(req, res, next) {
        try {
            const allCompetitions = await competitions.find({}).toArray()
            return res.json(allCompetitions)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAllGameTypes(req, res, next) {
        try {
            const games = mongoClient.db().collection('games')
            const allTypes = await games.find({}).toArray()
            return res.json(allTypes)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async createGameTypes(req, res, next) {
        let {newGameType} = req.query
        try {
            if (newGameType) {
                const gameType = await types.insertOne({game: newGameType})
                return res.json(gameType)
            } else res.json('Cannot create game without name. You asked to name game as: ', newGameType)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteGameTypes(req, res, next) {
        let {id} = req.query
        try {
            if (id) {
                const delGame = await types.deleteOne({_id: ObjectId(id)})
                return res.json(delGame)
            } else res.json('The ID cannot be empty')
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOneGameType(req, res, next) {
        let {id} = req.query
        try {
            if (id) {
                const game = await types.findOne({_id: ObjectId(id)})
                return res.json(game)
            } else res.json('The ID cannot be empty')
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new CompetitionController()
