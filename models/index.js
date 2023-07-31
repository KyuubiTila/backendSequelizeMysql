const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/dbConfig');

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

// AUTHENTICATE
sequelize
  .authenticate()
  .then(() => {
    console.log('connected');
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// CONNECTING THE DB TO INDIVIDUAL ROUTES
db.products = require('./productModel.js')(sequelize, DataTypes);
db.reviews = require('./reviewModel.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log('yes re-sync done');
});

module.exports = db;
