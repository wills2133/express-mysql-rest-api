'use strict'

module.exports = (sequelize, DataTypes) => {
  const bloodpressure = sequelize.define('bloodpressure', {
    // id: { type: DataTypes.INTEGER, primaryKey: true },
    check_date: { type: DataTypes.DATE },
    cond: { type: DataTypes.STRING },
    dbp: { type: DataTypes.INTEGER },
    deviceID: { type: DataTypes.INTEGER },
    deviceNO: { type: DataTypes.STRING },
    havepill: { type: DataTypes.STRING },
    heart_rate: { type: DataTypes.INTEGER },
    operate_date: { type: DataTypes.DATE },
    sbp: { type: DataTypes.INTEGER },
    fid: { type: DataTypes.INTEGER },
    relationuid: { type: DataTypes.INTEGER },
    uid: { type: DataTypes.INTEGER },
    collectType: { type: DataTypes.INTEGER },
    syncStatus: { type: DataTypes.INTEGER },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
    timestamps: false,
    freezeTableName: true,
    tableName: 't_bloodpressure'
  },
    
  )
  bloodpressure.associate = function(models) {
    // associations can be defined here
    // bloodpressure.hasOne(models.lifeStyle, {foreignKey:'uuid'})
  }

  // bloodpressure.drop({force:true})
  // bloodpressure.sync({force:true})
  
  return bloodpressure
}