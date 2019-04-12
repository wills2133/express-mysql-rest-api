'use strict'

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user',
  {
    openid: {
      type: DataTypes.STRING
    },
  },
  {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
  })

  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.history);
  }
 
  // user.rating = user.hasMany(tag);
  // user.sync({ force: true })
  // sequelize.sync()
  
  return user
}