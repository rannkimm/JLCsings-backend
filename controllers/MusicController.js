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

module.exports = {
    GetAllMusic
}