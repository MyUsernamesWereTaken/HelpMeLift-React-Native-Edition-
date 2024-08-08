
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    title: {
        type: String,
        required: true,
    },
    // The type will be the URL 
    video: {
        type: String,
        required: false,
    },
    animation: {
        type: String,
        required: false,
    },
    text: {
        type: String,
        required: true,
    }
}, {timestamps: true});







module.exports = mongoose.model("Workout", workoutSchema)