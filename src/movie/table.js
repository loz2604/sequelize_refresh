const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const Movie = sequelize.define("Movie", {
   title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    actor: {
        type: DataTypes.STRING,
        defaultValue: "Not specified"
    },
    // addedBy: {
    //     type: DataTypes.STRING
    // }
});

// const User = sequelize.define("User", {
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//     }
// });

module.exports = Movie, User;