//////// IMPORT ////////////
const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const app = express();
// const middleware = require('./middleware')


/////////// MIDDLEWARE //////////
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

/////////// DEFINE CONTROLLER VARIABLES /////////////



///////////////// ALL ROUTES ////////////////
app.get('/', (req, res) => res.json({ message: 'Server Works'}))

/////////// EXPRESS SERVER LISTEN TO PORT ///////////////
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))