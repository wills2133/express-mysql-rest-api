'use strict'

module.exports = (sequelize, DataTypes) => {
  const history = sequelize.define('history', 
    {
      selected: {
        type: DataTypes.BOOLEAN
      },
      watched: {
        type: DataTypes.BOOLEAN
      },
      videoid: {
        type: DataTypes.STRING
      },
      playedtime: {
        type: DataTypes.TIME
      },
      fromtag: {
        type: DataTypes.STRING
      },
    }, 
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    }
  )

  history.associate = function(models) {
    // associations can be defined here
    // history.hasOne(models.rating);
    // history.hasMany(models.staff);
    // history.hasMany(models.source);
    // history.hasMany(models.tag);
    // history.hasMany(models.rating2);
  }
 
  // history.rating = history.hasMany(tag);
  // history.sync({ force: true })
  // rating.sync({ force: true })
  // sequelize.sync()
  
  return history
}