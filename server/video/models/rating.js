module.exports = (sequelize, DataTypes) => {

    const rating = sequelize.define('rating', {
      rating: {
        type: DataTypes.FLOAT
      },
      hitrate: {
        type: DataTypes.INTEGER
      },
    },  {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    })
    rating.associate = function(models) {
      // associations can be defined here
      // rating.belongsTo(models.rating);
    }

    // rating.sync({ force: true })
    
    return rating
  }