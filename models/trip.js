const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Trip extends Model {

}

Trip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    trip_budget: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    traveller_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'Traveller',
        key: 'id',
        unique: false
      }
    },
    location_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'Location',
        key: 'id',
        unique: false
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'trip',
  },
);

module.exports = Trip;