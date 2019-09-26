const Sequelize = require('sequelize');
const db = require('../db');

const Color = db.define('color', {
  hexCode: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  categoryId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Color;
