const mongoose = require('mongoose');


// mongoose schmema are used to define the structure of the data
// and require it to be in a certain format
// otherwise mongodb does not have this requirement
// kind of like an interface

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true});

// model is a wrapper for the schema
// to interact with module with that name
// kind of like a class

module.exports = mongoose.model('Workout', workoutSchema);

