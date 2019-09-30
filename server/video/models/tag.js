module.exports = (sequelize, DataTypes) => {

    const tag = sequelize.define('tag', {
      name: {
        type: DataTypes.STRING
      },
    },  {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    })
    tag.associate = function(models) {
      // associations can be defined here
      // tag.belongsTo(models.tag);
    }

    // tag.sync({ force: true })
    
    return tag
  }