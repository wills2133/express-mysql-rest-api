module.exports = (Influx) => {
  const schema = {
    measurement: 'bonusbalance',
    fields: {
      balance: Influx.FieldType.INTEGER,
    },
    tags: [
      'bonusoperationid', // pointoperationid of current operation
    ]
  }
  return schema
}