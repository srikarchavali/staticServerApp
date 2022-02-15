require('./db/connection')
// require('dotenv')
const express = require('express');
const movieRouter = require("./movies/movieRoutes")
const app = express();
// const port = process.dotenv.PORT || 5001;
const port = 5001;

// app.use('/', express.static("public"));
// app.use('/about', express.static("public/about.html"));
// app.use('/projects', express.static("public/projects.html"));
// app.use('/contact', express.static("public/contact.html"));

app.use(express.json());
app.use(movieRouter);

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});
