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
        res.send({message: `Movie deleted successfully!`});
        }else if(req.body.actor){
        const result = await Movie.deleteOne({actor: req.body.actor}); 
        res.send({message: `Movie ${res.body.title} deleted successfully!`});
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}