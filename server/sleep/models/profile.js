'use strict'

module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define('profile', {
    uuid: {
      type: DataTypes.STRING
    },
    smoker: {
      type: DataTypes.BOOLEAN
    },
    drinker: {
      type: DataTypes.BOOLEAN
    },
    vegetarian: {
      type: DataTypes.BOOLEAN
    },
    sedentary: {
      type: DataTypes.BOOLEAN
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
  })
  profile.associate = function(models) {
    // associations can be defined here
    profile.hasMany(models.history)
    profile.hasMany(models.familyhistory);
    // profile.hasMany(models.rating2);
  }
  return profile
}