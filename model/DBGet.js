// Given a certain column and target value, get records
// product/api/get/?c={target_column}&q={target_value}&order={orderby}
exports.findByColumn = function (req,res) {
	var connection = require('./dbConfig');
	var column = req.query.c;
	var val = req.query.q;

	// If order not speficied, then use order date
	if (typeof req.query.order == 'undefined')
	{
		var order = 'Order_Date';
	} else {
		var order = req.query.order;
	}

	// get value of limit
	if (typeof req.query.limit == 'undefined')
	{
		var limit = 100;
	} else {
		var limit = parseInt(req.query.limit);
	}

	if (limit > 500 || limit < 1) {
		limit = 100;
	}

	// get offset value from requested page
	if (typeof req.query.page == 'undefined')
	{
		var page = 1;
	} else {
		var page = parseInt(req.query.page);
	}

	var offset = limit * (page - 1);

	connection.query('SELECT * from saleData where ?? = ? ORDER BY ?? DESC LIMIT ? OFFSET ?',
	[ column, val, order, limit, offset ], function(err, rows, fields) {
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
