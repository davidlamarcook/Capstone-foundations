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
        SELECT food_name, food_item_id FROM food_item
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
    },

    postFood: (req, res) => {
        console.log(req.body)
        let {food_item_id, stars, rating_date, rating_location, rating_comment} = req.body
        sequelize.query(`
        INSERT INTO ratings (food_item_id, stars, rating_date, rating_location, rating_comment)
        VALUES (${food_item_id}, ${stars}, '${rating_date}', '${rating_location}', '${rating_comment}');
        `)
        .then(dbRes => console.log(dbRes[0]))
    }

    
}