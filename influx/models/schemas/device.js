module.exports = (Influx) => {
  const schema = {
    measurement: 'device',
    fields: {
      beatrate: Influx.FieldType.INTEGER,
      heartrate: Influx.FieldType.INTEGER,
    },
    tags: [
      'ip',
      'deviceid',
      'setid',
      'location',
      'isactivated',
    ]
  }
  return schema
}