//////////// IMPORT /////////////
const router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

/////////// SET AUTHCONTROLLER ROUTES ////////////
router.post('/login', controller.Login)
router.post('/register', controller.Register)
router.get('/session', 
middleware.stripToken,
middleware.verifyToken,
controller.CheckSession)

///////// EXPORT /////////
module.exports = router