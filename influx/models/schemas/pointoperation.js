module.exports = (Influx) => {
  const schema = {
    measurement: 'pointoperation',
    fields: {
      balance: Influx.FieldType.INTEGER,
    },
    tags: [
      'pointoperationid', // pointoperationid of current operation
    ]
  }
  return schema
}