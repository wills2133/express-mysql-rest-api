module.exports = (sequelize, DataTypes) => {

    const staff = sequelize.define('staff', {
      name: {
        type: DataTypes.STRING
      },
      position: {
        type: DataTypes.STRING
      },
      role: {
        type: DataTypes.STRING
      },
      roledescription: {
        type: DataTypes.STRING
      },
    },  {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    })
    staff.associate = function(models) {
      // associations can be defined here
    }
  
    // staff.sync({ force: true })
    
    return staff
  }