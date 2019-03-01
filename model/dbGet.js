exports.findByColumn = function (connection, req, res) {
	// get parameters from url request, 
	// req.params from route(/), req.query from parameters(?) 
	var columnKeys = Object.keys(req.query);
	var columns = req.query;
	var table = req.params.table
	console.log("columns", columns)

	// query assemble begin
	var queryString = 'SELECT * from ?? where '
	var queryParams = [table]

	// query multiple columns
	columnKeys.map( (key, i) => {
		queryString += i === 0 ? '?? = ? ' : 'and ?? = ? '
		queryParams.push(key)
		queryParams.push(columns[key])
	} )

	// If order not speficied, then use order date
	if (typeof req.query.order != 'undefined')
	{
		queryString += 'ORDER BY ?? DESC '
		queryParams.push(req.query.order)
	}

	// get value of limit
	var limit = 100
	if (typeof req.query.limit != 'undefined' && parseInt(req.query.limit) > 1)
	{
		limit = parseInt(req.query.limit)
	}
	queryString += 'LIMIT ? '
	queryParams.push(parseInt(limit))

	// get offset value from requested page
	var page = 1;
	if (typeof req.query.page != 'undefined' && parseInt(req.query.page) > 1)
	{
		page = parseInt(req.query.page);
	}
	queryString += 'OFFSET ?'
	queryParams.push(limit * (page - 1))

	console.log("queryString", queryString)
	console.log("queryParams", queryParams)
	connection.query(queryString, queryParams, function(err, rows, fields) {
  		if (!err){
  			var response = [];
			if (rows.length != 0) {
				response.push({'result' : 'success', 'data' : rows});
			} else {
				response.push({'result' : 'error', 'msg' : 'No Results Found'});
			}
			res.setHeader('Content-Type', 'application/json');
	    	res.status(200).send(JSON.stringify(response));
  		} else {
		    res.status(400).send(err);
	  	}
	});
};
