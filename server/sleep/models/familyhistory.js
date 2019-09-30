'use strict'

module.exports = (sequelize, DataTypes) => {
  const familyhistory = sequelize.define('familyhistory', 
    {
      familydiabetes: { //糖尿病
        type: DataTypes.BOOLEAN
      },
      familysmoker: { //抽烟
        type: DataTypes.BOOLEAN
      },
      familyhypertension: { //高血压
        type: DataTypes.BOOLEAN
      },
      familycancer: { //癌症
        type: DataTypes.BOOLEAN
      },
      familyfibrillation: { //心房颤动
        type: DataTypes.BOOLEAN
      },
      familycardiovascularDisease: { //心血管疾病
        type: DataTypes.BOOLEAN
      },
      familycoronaryHeartDisease: { //冠心病
        type: DataTypes.BOOLEAN
      },
      familystroke: { //中风
        type: DataTypes.BOOLEAN
      },
      familygout: { //痛风
        type: DataTypes.BOOLEAN
      },
      familyhepatitis: { //肝炎
        type: DataTypes.BOOLEAN
      },
    }, 
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    }
  )

  familyhistory.associate = function(models) {
  }
 
  // familyhistory.rating = familyhistory.hasMany(tag);
  // familyhistory.sync({ force: true })
  // rating.sync({ force: true })
  // sequelize.sync()
  
  return familyhistory
}