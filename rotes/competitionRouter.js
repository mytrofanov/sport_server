const Router = require('express')
const router = new Router()
const competitionController = require('../controllers/competitionController')

// Competitions:
router.post('/competition', competitionController.createCompetition )
router.post('/updateCompetition',  competitionController.updateCompetition )
router.post('/deleteCompetition',  competitionController.deleteCompetition )
router.get('/competitions',  competitionController.getAllCompetitions )

// GameTypes:
router.get('/games', competitionController.getAllGameTypes )
router.post('/games', competitionController.createGameTypes )
router.post('/game', competitionController.getOneGameType )
router.post('/delgame', competitionController.deleteGameTypes )




module.exports = router
