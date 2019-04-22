module.exports = (Influx) => {
  const schema = {
    measurement: 'sensor',
    fields: {
      value: Influx.FieldType.INTEGER,
    },
    tags: [
      'ip',
      'sensorid', 
      'longitude',
      'latitude',
      'locationid', //device location
      'productid', //product id of device that is installed in
      'field', //value meaning(heartrate/bitrate)
    ]
  }
  return schema
}