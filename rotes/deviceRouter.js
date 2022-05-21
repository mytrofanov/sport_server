const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRole = require("../middleware/checkRoleMiddleware");

router.post('/', deviceController.create )
router.post('/update',  deviceController.update )
router.post('/updateInfo',  deviceController.updateInfo )
router.post('/createInfo',  deviceController.createInfo )
router.post('/delInfo',  deviceController.deleteInfo)
router.post('/del',  deviceController.delete )
router.get('/', deviceController.getAll )
router.get('/:id', deviceController.getOne )


module.exports = router
