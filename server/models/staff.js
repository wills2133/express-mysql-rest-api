module.exports = (sequelize, DataTypes) => {

    const staff = sequelize.define('staff', {
      name: {
        type: DataTypes.STRING
      },
      position: {
        type: DataTypes.STRING
      },
    },  {
      charset: 'utf8',
      collate: 'utf8_unicode_ci'
    })
    staff.associate = function(models) {
      // associations can be defined here
    }
  
    // staff.sync({ force: true })
    
    return staff
  }