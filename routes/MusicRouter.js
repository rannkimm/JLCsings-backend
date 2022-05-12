const Router = require('express').Router()
const controller = require('../controllers/MusicController')

Router.get('/', controller.GetAllMusic)
Router.get('/:music_id', controller.GetIndMusic)

module.exports = Router