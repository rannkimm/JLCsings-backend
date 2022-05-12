//////// IMPORT ////////////
const express = require('express');
const cors = require('cors')
const app = express();
const AppRouter = require('./routes/AppRouter')
const PORT = process.env.PORT || 3001;

/////////// MIDDLEWARE //////////
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))


///////////////// ROUTES ////////////////
app.get('/', (req, res) => res.json({ message: 'Server Works'}))

app.use('/', AppRouter)

/////////// EXPRESS SERVER LISTEN TO PORT ///////////////
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))