module.exports = (sequelize, DataTypes) => {

    const rating = sequelize.define('rating', {
      rating: {
        type: DataTypes.INTEGER
      },
      hitrate: {
        type: DataTypes.INTEGER
      },
    },  {
      charset: 'utf8',
      collate: 'utf8_unicode_ci'
    })
    rating.associate = function(models) {
      // associations can be defined here
      // rating.belongsTo(models.rating);
    }

    // rating.sync({ force: true })
    
    return rating
  }