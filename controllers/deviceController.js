const path = require('path')
const ApiError = require('../error/ApiError')

class DeviceController {
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

    async getAll(req, res) {



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

module.exports = new DeviceController()
