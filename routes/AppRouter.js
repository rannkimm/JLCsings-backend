const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const MusicRouter = require('./MusicRouter')

Router.use('/users', UserRouter)
Router.use('/musics', MusicRouter)

module.exports = Router