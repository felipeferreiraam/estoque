'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produto.init({
    nome: {
      type: DataTypes.STRING
    },
    categoria: {
      type: DataTypes.STRING
    },
    quantidade: {
      type: DataTypes.INTEGER
    },
    valor: {
      type: DataTypes.DECIMAL(10, 2)
    },
    data_entrada:{
      type: DataTypes.DATEONLY
    },
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};