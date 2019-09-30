'use strict'

module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define('profile', {
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    systolic: { //收缩压
      type: DataTypes.FLOAT
    },
    diastolic: { //舒张压
      type: DataTypes.FLOAT
    },
    glucose: { //血糖(mmol/liter)
      type: DataTypes.FLOAT
    },
    spo2: { //血氧(mmHg)
      type: DataTypes.FLOAT
    },
    temperature: { //体温(℃)
      type: DataTypes.FLOAT
    }, 
    bmi: { //体脂
      type: DataTypes.FLOAT
    },
    sleep: { //睡眠情况
      type: DataTypes.TEXT
    },
    smoker: { //抽烟
      type: DataTypes.BOOLEAN
    },
    drink: { //喝酒
      type: DataTypes.BOOLEAN
    },
    sport:{ //体育锻炼情况
      type: DataTypes.TEXT
    },
    personality:{ //性格
      type: DataTypes.STRING
    },
    allergy: { //药物过敏史
      type: DataTypes.TEXT
    },
    diseaseHistories: { //患病史
      type: DataTypes.TEXT
    },
    families: { //家族遗传史
      type: DataTypes.TEXT
    },
    surgeryHistories: { //手术史
      type: DataTypes.TEXT
    },
    height: { //身高(cm)
      type: DataTypes.FLOAT
    },
    weight: { //体重(kg)
      type: DataTypes.FLOAT
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
  })
  profile.associate = function(models) {
    // associations can be defined here
    // profile.hasOne(models.lifeStyle, {foreignKey:'uuid'})
  }

  // profile.drop({force:true})
  // profile.sync({force:true})
  return profile
}