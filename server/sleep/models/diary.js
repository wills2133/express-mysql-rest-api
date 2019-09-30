'use strict'

module.exports = (sequelize, DataTypes) => {
  const diary = sequelize.define('diary', {
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
  diary.associate = function(models) {
    diary.belongsToMany(models.acupoint, {through: models.diaryXacupoint})
    // associations can be defined here
    // diary.hasMany(models.rating2);
  }
  // diary.drop({force:true})
  return diary
}