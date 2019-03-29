'use strict'

module.exports = (sequelize, DataTypes) => {
  const video = sequelize.define('video', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    // labels: {
    //   type: DataTypes.STRING
    // },
    // actors: {
    //   type: DataTypes.TEXT
    // },
    // totaltime: {
    //   type: DataTypes.DATE
    // },
    // playedtime: {
    //   type: DataTypes.DATE
    // },
    producedtime: {
      type: DataTypes.DATE
    },
    season: {
      type: DataTypes.INTEGER
    },
    episodes: {
      type: DataTypes.INTEGER
    },
    copyright: {
      type: DataTypes.STRING
    },
    // copyrightscope: {
    //   type: DataTypes.TEXT
    // },
    // copyrightexpires: {
    //   type: DataTypes.DATE
    // },
    // rating: {
    //   type: DataTypes.INTEGER
    // },
    // hitrate: {
    //   type: DataTypes.INTEGER
    // },
  },  {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  })

  video.associate = function(models) {
    // associations can be defined here
    video.hasOne(models.rating);
    video.hasMany(models.staff);
    video.hasMany(models.source);
  }
 
  // video.rating = video.hasOne(rating);
  // video.sync({ force: true })
  // rating.sync({ force: true })
  // sequelize.sync()
  
  return video
}