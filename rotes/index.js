const Router = require('express')
const router = new Router()
const competitionRouter = require('./competitionRouter')

router.use('/competition', competitionRouter)


module.exports = router
