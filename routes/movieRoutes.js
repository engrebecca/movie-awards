const express = require("express");
const app = express();
const axios = require("axios");
const db = require("../models/movie");
const path = require("path");

// Route to add movie to db
app.post("/nominate", async (req, res) => {
    let movie = await db.create(req.body);
    res.json(movie);
})

// Route to delete movie to db
app.delete("/delete/:id", async (req, res) => {
    let movieId = req.params.id;
    await db.deleteOne({ _id: movieId });
    res.send(`${movieId} deleted`)
})

// Route to get all movies from db
app.get("/movies", async (req, res) => {
    let movies = await db.find({}).sort({ createdAt: -1 });
    res.json(movies);
})

// Return all requests to React app
if (process.env.NODE_ENV === "production") {
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build/index.html"))
    })
}

module.exports = app;