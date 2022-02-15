
const { Router } = require("express");
const { addMovie, listMovies, testRoute, findOne, deleteOne } = require("./movieControllers");
const movieRouter = Router();

// set endpoints with various HTTP verbs
movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.get("/test", testRoute);

// Retrieve a single Note with noteId
movieRouter.get('/findOne', findOne);

// // Update a Note with noteId
// movieRouter.put('/update', update);

// Delete a Note with noteId
movieRouter.delete('/delete', deleteOne);

module.exports = movieRouter