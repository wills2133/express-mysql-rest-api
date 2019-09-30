'use strict'

module.exports = (sequelize, DataTypes) => {
  const history = sequelize.define('history', 
    {
      diabetes: { //糖尿病
        type: DataTypes.BOOLEAN
      },
      smoker: { //抽烟
        type: DataTypes.BOOLEAN
      },
      hypertension: { //高血压
        type: DataTypes.BOOLEAN
      },
      cancer: { //癌症
        type: DataTypes.BOOLEAN
      },
      fibrillation: { //心房颤动
        type: DataTypes.BOOLEAN
      },
      cardiovascularDisease: { //心血管疾病
        type: DataTypes.BOOLEAN
      },
      coronaryHeartDisease: { //冠心病
        type: DataTypes.BOOLEAN
      },
      stroke: { //中风
        type: DataTypes.BOOLEAN
      },
      gout: { //痛风
        type: DataTypes.BOOLEAN
      },
      hepatitis: { //肝炎
        type: DataTypes.BOOLEAN
      },
      gestational: { //怀孕
        type: DataTypes.BOOLEAN
      },
      height: { //身高(cm)
        type: DataTypes.FLOAT
      },
    }, 
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    }
  )

  history.associate = function(models) {
  }
 
  // history.rating = history.hasMany(tag);
  // history.sync({ force: true })
  // rating.sync({ force: true })
  // sequelize.sync()
  
  return history
}