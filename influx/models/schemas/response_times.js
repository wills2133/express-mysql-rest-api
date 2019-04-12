module.exports = (Influx) => {
  const schema = {
    measurement: 'response_times',
    fields: {
      path: Influx.FieldType.STRING,
      duration: Influx.FieldType.INTEGER
    },
    tags: [
      'host'
    ]
  }
  return schema
}