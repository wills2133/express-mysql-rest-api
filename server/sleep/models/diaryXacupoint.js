'use strict'

module.exports = (sequelize, DataTypes) => {
  const diaryXacupoint = sequelize.define('diaryXacupoint', {
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
  })
  // diaryXacupoint.drop({force:true})
  return diaryXacupoint
}