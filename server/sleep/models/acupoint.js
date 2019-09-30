'use strict'
module.exports = (sequelize, DataTypes) => {
  const acupoint = sequelize.define('acupoint', {
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
  acupoint.associate = function(models) {
    // associations can be defined here
    acupoint.belongsToMany(models.diary, {through: models.diaryXacupoint})
    // acupoint.hasMany(models.rating2);
  }
  // acupoint.drop({force:true})
  return acupoint
}