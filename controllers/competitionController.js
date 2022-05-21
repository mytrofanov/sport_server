const ApiError = require('../error/ApiError')
const mongoClient = require('.././db')
const {ObjectId} = require("mongodb");


class CompetitionController {
    async create(req, res, next) {
        try {

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {



            return next(ApiError.success('Изменения внесены'))
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {


            return next(ApiError.success('Товар удален'))
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAllGameTypes(req, res, next) {
        try {
            const games = mongoClient.db().collection('games')
            const allTypes = await games.find({}).toArray()
            return res.json(allTypes)
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async createGameTypes(req, res, next) {
        let {newGameType} = req.query
        try {
            if (newGameType) {
                const types = mongoClient.db().collection('games')
                const gameType = await types.insertOne({game:newGameType})
                return res.json(gameType)
            } else res.json('Cannot create game without name. You asked to name game as: ', newGameType)
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async deleteGameTypes(req, res, next) {
        let {id} = req.query
        try {
            if (id) {
                const types = mongoClient.db().collection('games')
                const delGame = await types.deleteOne({_id: ObjectId(id)})
                return res.json(delGame)
            } else res.json('The ID cannot be empty')
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getOneGameType(req, res, next) {
        let {id} = req.query
        try {
            if (id) {
                const types = mongoClient.db().collection('games')
                const game = await types.findOne({_id: ObjectId(id)})
                return res.json(game)
            } else res.json('The ID cannot be empty')
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }


    async getAllFromGame(req, res) {

    }
    async getOne(req, res) {

    }


    // infoControllers

    async createInfo(req, res, next) {
        try {

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }


    async updateInfo(req, res, next) {
        try {

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteInfo(req, res, next) {
        try {
            let {id} = req.body

            return next(ApiError.success('Описание товара удалено'))
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }


}

module.exports = new CompetitionController()
