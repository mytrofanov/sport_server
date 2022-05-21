const ApiError = require('../error/ApiError')
const mongoClient = require('.././db')

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

    async getAllCollections(req, res, next) {
        try {
            // const football = mongoClient.db().collection('footsball')
            // const competition = await football.findOne({home: "Dinamo"})
            // console.log(competition)
            // const competitions = mongoClient.db().listCollections()
            const games = mongoClient.db().collection('games')
            const typeFootball = await games.findOne({game:'football'})
            const typeChess = await games.findOne({game:'chess'})
            const allTypes = await games.find({})

            return res.json(allTypes)
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAllinCollection(req, res) {

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
