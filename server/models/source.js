module.exports = (sequelize, DataTypes) => {

    const source = sequelize.define('source', {
      season: {
        type: DataTypes.INTEGER
      },
      episode: {
        type: DataTypes.INTEGER
      },
      totaltime: {
        type: DataTypes.TIME
      },
      playedtime: {
        type: DataTypes.TIME
      },
      title: {
        type: DataTypes.STRING
      },
      plot: {
        type: DataTypes.TEXT
      },
    },  {
      charset: 'utf8',
      collate: 'utf8_unicode_ci'
    })
    source.associate = function(models) {
      // associations can be defined here
      // source.belongsTo(models.source);
    }

    // source.sync({ force: true })
    
    return source
  }