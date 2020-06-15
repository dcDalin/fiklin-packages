'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'users',
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
        },
        firstName: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        lastName: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        userName: {
          allowNull: true,
          type: Sequelize.STRING,
          unique: true,
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true,
        },
        password: {
          allowNull: true,
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        deletedAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
      },
      {
        charset: 'utf8',
      },
    );
  },
  down: (queryInterface) => queryInterface.dropTable('users'),
};
