const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const MusicRouter = require('./MusicRouter')
const AuthRouter = require('./AuthRouter')

Router.use('/users', UserRouter)
Router.use('/musics', MusicRouter)
Router.use('/auth', AuthRouter)

module.exports = Router