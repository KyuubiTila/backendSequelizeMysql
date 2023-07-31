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

// AUTHENTICATE IF CONNECTION WAS SUCCESSFUL OR FAILED
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

// THIS IS WHERE THE TABLE CREATION IN THE DATABASE OF MYSQL IS TAKING PLACE
// SEQUELIZE CONNECTING THE DB TO CREATING INDIVIDUAL MODELS TABLE
db.product = require('./productModel.js')(sequelize, DataTypes);
db.review = require('./reviewModel.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log('yes re-sync done');
});

// 1 TO MANY RELATION
// THE FOREIGN KEY IS THAT OF THE 1 RELATION
// THE ALIANCE IS THAT OF THE PASSED FUNCTION
db.product.hasMany(db.review, {
  foreignKey: 'product_id',
  as: 'review',
});

db.review.belongsTo(db.product, {
  foreignKey: 'product_id',
  as: 'product',
});

module.exports = db;
