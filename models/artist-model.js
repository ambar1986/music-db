const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

// create the Artist model
var Artist = sequelizeConnection.define('artist', {
  name: {
    type: Sequelize.STRING,
    validate: {
      len: [1, 50]
    }
  }
});

module.exports = Artist;
