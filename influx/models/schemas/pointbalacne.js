module.exports = (Influx) => {
  const schema = {
    measurement: 'pointbalacne',
    fields: {
      record: Influx.FieldType.INTEGER,
    },
    tags: [
      'userid',
      'longitude',
      'latitude',
      'locationid', //device location
      'eventid', 
    ]
  }
  return schema
}