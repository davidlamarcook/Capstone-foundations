require("dotenv").config();
const Sequelize = require("sequelize");
const {CONNECTION_STRING} = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres", 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})


module.exports = {
    getFood: (req, res) => {
        sequelize.query(`
        SELECT food_name FROM food_item
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
    },

    
}