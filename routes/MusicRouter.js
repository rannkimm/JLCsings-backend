const Router = require('express').Router()
const controller = require('../controllers/MusicController')

Router.get('/', controller.GetAllMusic)

module.exports = Router