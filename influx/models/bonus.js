module.exports = (Influx) => {
  const schema = {
    measurement: 'bonus',
    fields: {
      value: Influx.FieldType.FLOAT, //本次操作的数值
    },
    tags: [
      'action', //积分修改的动作
      'type', //积分修改的类型
      'event', //积分修改的事件
      'source', 
      'uuid', //用户id
      'lat', //纬度
      'lon', //经度
      'city',
      'region',
      'country',
      'postal_code',
      'location',
      'ip',
      'adjustment', //分数调整
    ],
    timestamp: Influx.FieldType.INTEGER
  }
  return schema
}