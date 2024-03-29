'use strict';

const tableName = 'users';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .createTable(
        tableName,
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
      )
      .then(() => {
        console.log(`Created table ${tableName}`);
      })
      .catch((error) =>
        console.log(`Could not create table ${tableName}: ${error}`),
      );
  },
  down: (queryInterface) =>
    queryInterface
      .dropTable(tableName)
      .then(() => console.log(`Dropped table ${tableName}`))
      .catch((error) =>
        console.log(`Could not drop table ${tableName}: ${error}`),
      ),
};
