const { sequelize } = require('../../database')
const { DataTypes } = require('sequelize')

const Tweet = sequelize.define(
  'tweet',
  {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        checkLength(value) {
          if (value.length > 255) {
            throw new Error ('Text cannot be longer than 255 characters')
          }
        }
      }
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }
)

module.exports = Tweet