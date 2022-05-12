const { User, Music } = require('../models')

const GetAllUsers = async (req, res) => {

    try{
        const allUsers = await User.findAll({})
        res.send(allUsers)
    }catch(error) {
        throw error
    }
}

const GetIndUser = async (req, res) => {
    try{
        const indUser = await User.findByPk(parseInt(req.params.user_id))
        const getMusics = await Music.findAll({
            where: {user_id: parseInt(req.params.user_id)}
        })
        res.send({indUser, getMusics})
    }catch (error){
        throw error
    }
}

// const CreateUser = async (req, res) => {
//     try{
//         let userBody = {
//             ...req.body
//         }
//         const newUser = await User.create(userBody)
//         res.send(newUser)
//     }catch(error) {
//         throw error
//     }
// }

const CreateMusic = async (req, res) => {
    try{
        const user_id = parseInt(req.params.user_id)
        let musicBody = {
            user_id,
            ...req.body
        }
        const newMusic = await Music.create(musicBody)
        res.send(newMusic)
    }catch (error) {
        throw error
    }
}

module.exports = {
    GetAllUsers,
    GetIndUser,
    // CreateUser,
    CreateMusic
}