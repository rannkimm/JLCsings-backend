const Router = require('express').Router()
const controller = require('../controllers/MusicController')

Router.get('/', controller.GetAllMusic)
Router.get('/:music_id', controller.GetIndMusic)
Router.get('/all/sheets', controller.GetAllMusicsheet)
Router.get('/all/sheets/:musicsheet_id', controller.GetIndMusicsheet)
Router.get('/all/sheets/find/:key', controller.GetAllMusicsheetByKey)
Router.post('/all/sheets/new/:music_id', controller.CreateMusicsheet)
Router.put('/:music_id', controller.UpdateMusic)
Router.put('/sheets/:musicsheet_id', controller.UpdateMusicsheet)
Router.delete('/:music_id', controller.DeleteMusic)
Router.delete('/sheets/:musicsheet_id', controller.DeleteMusicsheet)
module.exports = Router