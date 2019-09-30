'use strict'

//ref: https://www.nejm.org/doi/full/10.1056/nejmoa035622#figures_media

module.exports = (sequelize, DataTypes) => {
  const diabetesrisk = sequelize.define('diabetesrisk', 
    {
      // 静态数据
      date_of_birth: { //生日
        type: DataTypes.DATE
      },
      gender: { //性别(0: 女， 1：男)
        type: DataTypes.BOOLEAN
      },
      smoker: { //抽烟
        type: DataTypes.BOOLEAN
      },
      diabetesFamily: { //家族糖尿病史
        type: DataTypes.BOOLEAN
      },
      gestational: { //怀孕
        type: DataTypes.BOOLEAN
      },
      height: { //身高(cm)
        type: DataTypes.FLOAT
      },
      // 动态数据
      heartrate: { //心率(bmp)
        type: DataTypes.FLOAT 
      },
      weight: { //体重(kg)
        type: DataTypes.FLOAT 
      },
      bmi: { //body-mass index
        type: DataTypes.FLOAT
      },
      systolic: { //收缩压(mmHg)
        type: DataTypes.BOOLEAN
      },
      diastolic: { //舒张压(mmHg)
        type: DataTypes.BOOLEAN
      },
      glucose: { //血糖(mmol/liter)
        type: DataTypes.BOOLEAN
      },
      insulin: { //胰岛素(mU/liter)
        type: DataTypes.BOOLEAN
      },
      uricacid: { //尿酸(μmol/liter)
        type: DataTypes.BOOLEAN
      },
      triglycerides: { //三酸甘油脂(mmol/liter)
        type: DataTypes.BOOLEAN
      },
      serumcholesterol: { //血清胆固醇(mmol/liter)
        type: DataTypes.BOOLEAN
      },
    }, 
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    }
  )

  diabetesrisk.associate = function(models) {
  }
 
  // diabetesrisk.rating = diabetesrisk.hasMany(tag);
  // diabetesrisk.sync({ force: true })
  // rating.sync({ force: true })
  // sequelize.sync()
  
  return diabetesrisk
}