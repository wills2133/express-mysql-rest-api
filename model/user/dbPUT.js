"use strict"
exports.update = function (connection, req, res) {
	// req.params from route(/), req.query from parameters(?) 
	var columnKeys = Object.keys(req.query)
    var columns = req.query
    var table = req.params.table
    var response = []
	console.log("columns", columns)

    // divide obj colunms and update clounms
    var columnsToUpdate = {}
    var columnsObj = {}
    columnKeys.forEach( (key, i) => {
        if( key.split('-')[0] === 'obj' ){
            columnsObj[key.split('-')[1]] = columns[key]
        }else{
            columnsToUpdate[key] = columns[key]
        }
    })
    
	// query assemble begin
	var queryString = `UPDATE ${table} SET ? WHERE `
    var queryParams = [columnsToUpdate]

	// query multiple columns
	Object.keys(columnsObj).forEach( (key, i) => {
		queryString += i === 0 ? '?? = ? ' : 'AND ?? = ? '
		queryParams.push(key)
		queryParams.push(columnsObj[key])
    } )
    
    console.log("queryString", queryString)
	console.log("queryParams", queryParams)
    connection.query(queryString, queryParams,
        function(err, result) { 
            if (!err){
                if (result.affectedRows != 0) {
                    response.push({'result' : 'success'})
                } else {
                    response.push({'msg' : 'No Result Found'})
                }
                res.setHeader('Content-Type', 'application/json')
                res.status(200).send(JSON.stringify(response))
            } else {
                res.status(400).send(err)
            }
        }
    )
}