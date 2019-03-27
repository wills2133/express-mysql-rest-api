'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('videos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      labels: {
        type: Sequelize.STRING
      },
      // actors: {
      //   type: Sequelize.TEXT
      // },
      totaltime: {
        type: Sequelize.DATE
      },
      // playedtime: {
      //   type: Sequelize.DATE
      // },
      producedtime: {
        type: Sequelize.DATE
      },
      season: {
        type: Sequelize.INTEGER
      },
      episode: {
        type: Sequelize.INTEGER
      },
      // copyright: {
      //   type: Sequelize.STRING
      // },
      // copyrightscope: {
      //   type: Sequelize.TEXT
      // },
      // copyrightexpires: {
      //   type: Sequelize.DATE
      // },
      // rating: {
      //   type: Sequelize.INTEGER
      // },
      // hitrate: {
      //   type: Sequelize.INTEGER
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('videos')
  }
}
