const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        poster: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model("movie", movieSchema);