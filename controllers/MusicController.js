const { User, Music, Musicsheet } = require('../models')

const GetAllMusic = async (req, res) => {
    try{
        const allMusic = await Music.findAll({
            include: [
                { model: User, as: 'user', attributes: ['username'] },
                {model: Musicsheet, as: 'thisMusic', attributes: ['title', 'image', 'key']}
            ]
        })
        res.send(allMusic)
    }catch(error) {
        throw error
    }
}

const GetIndMusic = async (req, res) => {
    try{
        const indMusic = await Music.findByPk(parseInt(req.params.music_id), {
            include: [
                { model: User, as: 'user', attributes: ['username'] },
                {model: Musicsheet, as: 'thisMusic', attributes: ['title', 'image', 'key']}
            ]
        })
        res.send(indMusic)
    }catch (error) {
        throw error
    }
}

const GetAllMusicsheet = async (req, res) => {
    try{
        const allMusicsheet = await Musicsheet.findAll({
            include: [
                { model: Music, as: 'thisMusic'}
            ]
        })
        res.send(allMusicsheet)
    }catch(error) {
        throw error
    }
}

const GetIndMusicsheet = async (req, res) => {
    try{
        const indMusicsheet = await Musicsheet.findByPk(parseInt(req.params.musicsheet_id), {
            include: [
                { model: Music, as: 'thisMusic'}
            ]
        })
        res.send(indMusicsheet)
    }catch(error) {
        throw error
    }
}

const GetAllMusicsheetByKey = async (req, res) => {
    try{
        const musicsheetByKey = await Musicsheet.findAll({
            where: {key: req.params.key}
        })
        res.send(musicsheetByKey)
    } catch (error) {
        throw error
    }
}


const CreateMusicsheet = async (req, res) => {
    try{
        const music_id = parseInt(req.params.music_id)
        let musicsheetBody = {
            music_id,
            ...req.body
        }
        const newSheet = await Musicsheet.create(musicsheetBody)
        res.send(newSheet)
    }catch (error) {
        throw error
    }
}

const UpdateMusic = async (req, res) => {
    try{
        const music_id = parseInt(req.params.music_id)
        let updatedMusic = await Music.update(req.body, {
            where: {id: music_id},
            returning: true
        })
        res.send(updatedMusic)
    } catch (error) {
        throw error
    }
}

const UpdateMusicsheet = async (req, res) => {
    try{
        const musicsheet_id = parseInt(req.params.musicsheet_id)
        let updatedMusicsheet = await musicsheet_id.update(req.body, {
            where: {id: musicsheet_id},
            returning: true
        })
        res.send(updatedMusicsheet)
    } catch (error) {
        throw error
    }
}

const DeleteMusic = async (req, res) => {
    try{
        const musicId = parseInt(req.params.music_id)
        const deletedMusic = await Music.destroy({where: {id: musicId}})
        res.send({message: `Deleted post with an id of ${musicId}`})
    } catch(error) {
        throw error
    }
}

const DeleteMusicsheet = async (req, res) => {
    try{
        const musicsheetId = parseInt(req.params.musicsheet_id)
        const deletedMusicsheet = await Musicsheet.destroy({where: {id: musicsheetId}})
        res.send({message: `Deleted post with an id of ${musicsheetId}`})
    } catch(error) {
        throw error
    }
}

module.exports = {
    GetAllMusic,
    GetIndMusic,
    GetAllMusicsheet,
    GetIndMusicsheet,
    GetAllMusicsheetByKey,
    CreateMusicsheet,
    UpdateMusic,
    UpdateMusicsheet,
    DeleteMusic,
    DeleteMusicsheet
}