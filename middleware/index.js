///////// IMPORT ///////////
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

///////////// DEFINE VARIABLES ///////////////
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = process.env.APP_SECRET


//////////// FUNCTION TO HASH PASSWORD /////////////
const hashPassword = async (password) => {

    let hashedPassword = await bcrypt.hash(
        password, SALT_ROUNDS
    )
    return hashedPassword
}

////////// FUNCTION TO COMPARE PASSWORDS //////////
const comparePassword = async (storedPassword, password) => {

    let passwordMatch = await bcrypt.compare(
        password, storedPassword
    )
    return passwordMatch

}

////////// FUNCTION TO CREATE JWT ///////////
const createToken = (payload) => {

    let token = jwt.sign(payload, APP_SECRET)
    return token
}

//////// FUNCTION TO VERIFY JWT //////////
const verifyToken = (req, res, next) => {
    const { token } = res.locals
    let payload = jwt.verify(token, APP_SECRET)
        if (payload) {
            res.locals.payload = payload
            return next()
        }
        res.status(401).send({ status: 'error', msg: 'Unauthorized'})
}

///////// FUNCTION TO STRIP(READ) JWT /////////
const stripToken = (req, res, next) => {
    try{
        const token = req.headers['authorization'].split(' ')[1]
        if (token) {
            res.locals.token = token
            return next()
        }
    } catch (error) {
        res.status(401).send({
            status: 'error',
            msg: 'Unauthorized'
        })
    }

}

//////// EXPORT /////////
module.exports = {
    stripToken,
    verifyToken,
    createToken,
    comparePassword,
    hashPassword,
}