"use strict"
exports.findByColumn = function (connection, req, res) {
	// get parameters from url request, 
	// req.params from route(/), req.query from parameters(?) 
	const columns = req.query
	const tables = req.params
	console.log("columns", columns)
	console.log("params", tables)
	// query string assemble begin
	var queryString = 'SELECT * FROM ?? a '
	const queryParams = [tables.table]
	// add table2 if join query
	if(tables.hasOwnProperty('table2')){
		queryString += ', ?? b '
		queryParams.push(tables.table2)
	}
	// add join key if existed
	if(columns.hasOwnProperty('join')){
		queryString += 'WHERE ??=?? '
		queryParams.push('a.' + columns['join'])
		queryParams.push('b.' + columns['join'])
	}else{
		queryString += 'WHERE 1=1 '
	}
	// query multiple columns
	for(var key in columns){
		if(key != 'descorder' && key != 'ascorder' && key != 'limit' && key != 'page' && key != 'join'){
			queryString += 'AND ?? = ? '
			queryParams.push(key)
			queryParams.push(columns[key])
		}
	}
	// If order not speficied, then use order date
	if (columns.hasOwnProperty('descorder'))
	{
		queryString += 'ORDER BY ?? DESC '
		queryParams.push(columns['descorder'])
	}else if(columns.hasOwnProperty('ascorder')){
		queryString += 'ORDER BY ?? ASC '
		queryParams.push(columns['ascorder'])
	}
	// get value of limit
	var limit = 100
	if (columns.hasOwnProperty('limit') && parseInt(req.query.limit) > 1){
		limit = parseInt(req.query.limit)
	}
	queryString += 'LIMIT ? '
	queryParams.push(parseInt(limit))
	// get offset value from requested page
	var page = 1
	if (columns.hasOwnProperty('page') && parseInt(req.query.page) > 1){
		page = parseInt(req.query.page)
	}
	queryString += 'OFFSET ?'
	queryParams.push(limit * (page - 1))
	// query string assemble end
	console.log("queryString", queryString)
	console.log("queryParams", queryParams)
	connection.query(queryString, queryParams, function(err, rows, fields) {
  		if (!err){
  			var response = []
			if (rows.length != 0) {
				response.push({'result' : 'success', 'data' : rows})
			} else {
				response.push({'result' : 'error', 'msg' : 'No Results Found'})
			}
			res.setHeader('Content-Type', 'application/json')
	    	res.status(200).send(JSON.stringify(response))
  		} else {
		    res.status(400).send(err)
	  	}
	})
}