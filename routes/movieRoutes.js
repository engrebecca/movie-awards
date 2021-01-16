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

// Route to get all movies from db

module.exports = app;