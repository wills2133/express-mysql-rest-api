module.exports = (Influx) => {
  const schema = {
    measurement: 'point',
    fields: {
      record: Influx.FieldType.INTEGER,
      balance: Influx.FieldType.INTEGER,
    },
    tags: [
      'userid',
      'locationid', 
      'eventid', 
      'isbalanceupdated', 
    ]
  }
  return schema
}