const express = require('express');
const cors = require('cors');
const app = express();
const NoteRouter = require('./src/routes/create.routes')
const fetchRoute = require('./src/routes/allFetch.routes')
const deleteRoute = require('./src/routes/oneFetch.route')


//Middleware or api ---
app.use(cors());
app.use(express.json());
app.use('/api', NoteRouter)
app.use('/api', fetchRoute) 
app.use('/api', deleteRoute)



// Home Route for proetct--
app.get('/', (req, res) => {
    res.status(200).send("Working......")
})


module.exports = app;
