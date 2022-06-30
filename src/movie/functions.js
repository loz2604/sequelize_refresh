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
        for (let i = 0; i < movies.length; i++) {
            // console.log(movies[i].dataValues.title, movies[i].dataValues.actor)
            console.log(movies)
        }
    } catch (error) {
        console.log(error)
    }
};

// List one movie
exports.listMovie = async () => {
    try {
        const movie = await Movie.findOne();


        
    } catch (error) {
        console.log(error)
    }
};

// Update one movie
exports.updateMovie = async (update, title, actor, id) => {
    try {
        if (update === title) {
            const movie = await Movie.findByPk(id);
            const update = await Movie.update({title: title || movie.title, actor: actor || movie.actor}, {where: id} );
            if (update[0] > 0) {
                console.log("Your movie has been updated");
        }  } else {
            console.log("An error occured, please try again");
            // console.log(error)
        }
        if (update === actor) {
            const movie = await Movie.findByPk(id);
            const update = await Movie.update({title: title || movie.title, actor: actor || movie.actor}, {where: id} );
            if (update[0] > 0) {
                console.log("Your movie has been updated");
        }  } else {
            console.log("An error occured, please try again");
        }
    } catch (error) {
        console.log(error);
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