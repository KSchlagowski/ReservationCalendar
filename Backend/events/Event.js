const { DataTypes } = require("sequelize");
const sequelize = require('../db');

const Event = sequelize.define('event', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Event;
