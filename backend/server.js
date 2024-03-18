require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

// express app
const app = express();

// middleware

// looks to see if there is data that is sent to the server and parses it
// can now use req.body to get data from the client
app.use(express.json());

// fires for every request
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes

// grabs all different routes used attached the router and uses
// them on the app when on website.com/api/workouts(ex: /, /create ect)
app.use('/api/workouts', workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests on port
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

