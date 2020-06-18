'use strict';

const tableName = 'logs';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .createTable(
        tableName,
        {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.STRING,
          },
          description: {
            allowNull: false,
            type: Sequelize.STRING,
          },
          location: {
            allowNull: false,
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
