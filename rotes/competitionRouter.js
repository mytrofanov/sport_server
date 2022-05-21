const Router = require('express')
const router = new Router()
const competitionController = require('../controllers/competitionController')

router.post('/', competitionController.create )
router.post('/update',  competitionController.update )
router.post('/updateInfo',  competitionController.updateInfo )
router.post('/createInfo',  competitionController.createInfo )
router.post('/delInfo',  competitionController.deleteInfo)
router.post('/del',  competitionController.delete )
router.get('/games', competitionController.getAllCollections )
router.get('/', competitionController.getAllinCollection )
router.get('/:id', competitionController.getOne )


module.exports = router
