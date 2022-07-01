const Movie = require("./table");

// Add one movie
exports.addMovie = async (movieObj) => {
    try {
        const response = await Movie.create(movieObj);
        console.log(response)
    } catch (error) {
        console.log(error)
    }
};

// List all movies
exports.listMovies = async () => {
    try {
        const movies = await Movie.findAll();
        console.log(movies)
    } catch (error) {
        console.log(error)
    }
};

 // for (let i = 0; i < movies.length; i++) {
        //     // console.log(movies[i].dataValues.title, movies[i].dataValues.actor)
        //     console.log(movies)
        // }

// List one movie
exports.listOneMovie = async (movieIdSelector) => {
    try {
        const movie = await Movie.findOne(movieIdSelector);
        console.log(movie)
    } catch (error) {
        console.log(error)
    }
};

// Update one movie
exports.updateMovie = async (updateMovieObj, movieIdSelector) => {
    try {
        const response = await Movie.update(updateMovieObj, movieIdSelector );
        console.log(response);
    } catch (error) {
        console.log(error)
    }
};




// Delete one movie
exports.deleteMovie = async (filterObj) => {
    try {
        const remove = await Movie.destroy({where: filterObj});
        if (remove > 0) {
            console.log("Movie was deleted");
        } else {
            console.log("An error occured, please try again");
        }
    } catch (error) {
        console.log(error);
    }
};
