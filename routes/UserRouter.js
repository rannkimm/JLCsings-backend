const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetAllUsers)
Router.get('/:user_id', controller.GetIndUser)
// Router.post('/new', controller.CreateUser)
Router.post('/:user_id/newmusic', controller.CreateMusic)

module.exports = Router