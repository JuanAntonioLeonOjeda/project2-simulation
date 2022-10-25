const { sequelize } = require('../../database')
const { DataTypes } = require('sequelize')

const Pet = sequelize.define(
  'Pet',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  { timestamps: false }
)

module.exports = Pet