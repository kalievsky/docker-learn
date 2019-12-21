const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgresql://postgres:example@db:5432/postgres', {
  dialect: 'postgres',
});
module.exports.sequelize = sequelize;

class User extends Model {}
User.init({
  name: DataTypes.STRING,
}, {sequelize});
module.exports.User = User;

sequelize.sync();
