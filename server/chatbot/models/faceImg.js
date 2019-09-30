'use strict'

module.exports = (sequelize, DataTypes) => {
  const faceImg = sequelize.define('faceImg', {
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: DataTypes.TEXT
    },
    name: {
      type: DataTypes.STRING
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
  })
  faceImg.associate = function(models) {
    // associations can be defined here
    // faceImg.hasOne(models.lifeStyle, {foreignKey:'uuid'})
  }

  // faceImg.drop({force:true})
  // faceImg.sync({force:true})
  
  return faceImg
}