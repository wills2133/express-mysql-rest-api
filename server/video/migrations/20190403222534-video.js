'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('source', {
      season: {
        type: Sequelize.INTEGER
      },
      episode: {
        type: Sequelize.INTEGER
      },
      totaltime: {
        type: Sequelize.TIME
      },
      playedtime: {
        type: Sequelize.TIME
      },
      title: {
        type: Sequelize.STRING
      },
      plot: {
        type: Sequelize.TEXT
      },
      url: {
        type: Sequelize.TEXT
      },
    },  {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
