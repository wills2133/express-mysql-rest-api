'use strict'

module.exports = (sequelize, DataTypes) => {
  const video = sequelize.define('video', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    season: {
      type: DataTypes.INTEGER
    },
    episodes: {
      type: DataTypes.INTEGER
    },
    language: {
      type: DataTypes.STRING
    },
    region: {
      type: DataTypes.STRING
    },
    producedtime: {
      type: DataTypes.DATE
    },
    copyright: {
      type: DataTypes.STRING
    },
    
  },  {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
  })

  video.associate = function(models) {
    // associations can be defined here
    video.hasOne(models.rating);
    video.hasMany(models.staff);
    video.hasMany(models.source);
    video.hasMany(models.tag);
    // video.hasMany(models.rating2);
  }
 
  // video.rating = video.hasMany(tag);
  // video.sync({ force: true })
  // rating.sync({ force: true })
  // sequelize.sync()
  
  return video
}