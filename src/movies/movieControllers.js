const Movie = require("./movieModel");

// build function to add a new entry to our db
// the function takes the request from the client(insomnia) 
// and sends a response from the server(our app)

exports.addMovie = async (req, res)=>{
    try {
        const newMovie = await Movie.create(req.body);
        res.status(200).send({movie: newMovie});
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
};

// build function to list all of our db entries
// use the req when building more complicated get requests.
exports.listMovies= async(req, res)=>{
    try {
        const movies = await Movie.find({});
        res.status(200).send({movies});
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

// quick test function to see if our app is behaving as expected 
// when hitting the "localhost:5001/test" route
exports.testRoute = async (req, res) => {
    res.status(200).send({"test": "test route works"});
};


// Find a movie document from collection
exports.findOne = async (req, res) => {
    try {
        if(req.body.title){
        const result = await Movie.findOne({title: req.body.title});
        res.status(200).send(result);
        console.log(result); 
        }else if(req.body.actor){
        const result = await Movie.findOne({actor: req.body.actor}); 
        res.status(200).send(result);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

// Delaate a movie document from collection
exports.deleteOne = async (req, res) => {
    try {
        if(req.body.title){
        const result = await Movie.deleteOne({title: req.body.title});
        res.status(200).send({message: `Movie deleted successfully!`});
        }else if(req.body.actor){
        const result = await Movie.deleteOne({actor: req.body.actor}); 
        res.status(200).send({message: `Movie deleted successfully!`});
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message});
    }
}

// Delete all movies
exports.deleteMany = async (req, res) => {
    try {
        const result = await Movie.deleteMany({});
        res.status(200).send({message: `${result.deletedCount} movies deleted successfully!`});
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message});
    }
}

//Update movie using title or actor
exports.updateOne = async (req, res) => {
    try {
        if(req.body.title){
        const result = await Movie.updateOne({title: req.body.title},{$set: {title: req.body.newtitle}});
        res.status(200).send({message: `found ${result.matchedCount} item(s) modified ${result.modifiedCount} item(s)`});
        }else if(req.body.actor){
        const result = await Movie.updateOne({actor: req.body.actor},{$set: {actor: req.body.newactor}}); 
        res.status(200).send({message: `found ${result.matchedCount} item(s) modified ${result.modifiedCount} item(s)`});
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message});
    }
}

//Update movie using ID
exports.updateById = async (req, res) => {
    try {
        const result = await Movie.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send({message: `Item with id ${req.params.id} modified`});
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message});
    }
}