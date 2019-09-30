module.exports = (Influx) => {
  const schema = {
    measurement: 'measuring',
    fields: {
      value: Influx.FieldType.FLOAT,
    },
    tags: [
      'deviceid', //装置id
      'device', //装置名
      'sensorid', //传感器id
      'sensor', //传感器名
      'uuid', //用户id
      'lat', //纬度
      'lon', //经度
      'city',
      'region',
      'country',
      'postal_code',
      'location',
      'ip',
      'unit',
    ],
    timestamp: Influx.FieldType.INTEGER
  }
  return schema
}