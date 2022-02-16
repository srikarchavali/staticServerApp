
const { Router } = require("express");
const { addMovie, listMovies, testRoute, findOne, deleteOne, updateOne, updateById, deleteMany } = require("./movieControllers");
const movieRouter = Router();

// set endpoints with various HTTP verbs
movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.get("/test", testRoute);

// Retrieve a single movie
movieRouter.get('/search', findOne);

// Update a movie with title or actor
movieRouter.put('/update', updateOne);

// Update a movie with ID
movieRouter.put('/:id', updateById);

// Delete a movie
movieRouter.delete('/delete', deleteOne);

//Delete all movies
movieRouter.delete('/deleteAll', deleteMany);

module.exports = movieRouter