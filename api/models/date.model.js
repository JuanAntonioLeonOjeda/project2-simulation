const { sequelize } = require('../../database')
const { DataTypes } = require('sequelize')

const Date = sequelize.define('Date', {
  place: {
    type: DataTypes.STRING
  },
  day: {
    type: DataTypes.STRING
  }
});

module.exports = Date