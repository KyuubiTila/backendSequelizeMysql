const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/dbConfig');

//MAKING USE OF SEQUELIZE TO CREATING THE CONNECTION TO THE DATABASE
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  HOST: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// AUTHENTICATE IF CONNECTION WAS MADE OR FAILED
sequelize
  .authenticate()
  .then(() => {
    console.log('connected');
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });
// the returns the object of the database created
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// CONNECTING THE DB TO INDIVIDUAL TABLE ROUTES
db.products = require('./productModel.js')(sequelize, DataTypes);
db.reviews = require('./reviewModel.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log('yes re-sync done');
});

module.exports = db;
