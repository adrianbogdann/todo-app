'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Todos.belongsTo(models.User, { foreignKey: 'userId', as: 'author' });
    }
  }

  Todos.init({
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Todos',
  });

  return Todos;
};