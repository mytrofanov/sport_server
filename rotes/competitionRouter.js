const Router = require('express')
const router = new Router()
const competitionController = require('../controllers/competitionController')

router.post('/', competitionController.create )
router.post('/update',  competitionController.update )
router.post('/updateInfo',  competitionController.updateInfo )
router.post('/createInfo',  competitionController.createInfo )
router.post('/delInfo',  competitionController.deleteInfo)
router.post('/del',  competitionController.delete )

// GameTypes:
router.get('/games', competitionController.getAllGameTypes )
router.post('/games', competitionController.createGameTypes )
router.post('/delgame', competitionController.deleteGameTypes )

router.get('/', competitionController.getAllFromGame )
router.get('/:id', competitionController.getOne )


module.exports = router
