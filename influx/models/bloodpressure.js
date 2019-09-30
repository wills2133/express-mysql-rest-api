module.exports = (Influx) => {
  const schema = {
    measurement: 'bloodpressure',
    fields: {
      systolic: Influx.FieldType.FLOAT, //收缩压
      diastolic: Influx.FieldType.FLOAT, //舒张压
    },
    tags: [
      'deviceid', //装置id
      'device', //装置名
      'sensorid', //传感器id
      'sensor', //传感器名
      'uuid', //用户id
      'lat', //纬度
      'lon', //经度
      'city', //城市
      'region', //地区
      'country', //国家
      'postal_code', //邮编
      'location', //地点
      'ip', //ip地址
      'unit', //单位
    ],
    timestamp: Influx.FieldType.INTEGER
  }
  return schema
}