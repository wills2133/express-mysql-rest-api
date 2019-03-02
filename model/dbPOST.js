// product/api/add/?content=1,2,3,...
exports.addOne = function (connection, req, res) {
	// req.params from route(/), req.query from parameters(?) 
	var columnKeys = Object.keys(req.query);
	var columns = req.query;
    var table = req.params.table
    var response = [];
	console.log("columns", columns)

	// query assemble begin
	var queryString = `INSERT INTO ${table} SET ?`

    connection.query(queryString, columns,
        function(err, result) {
            if (!err){
                if (result.affectedRows != 0) {
                    response.push({'result' : 'success'});
                } else {
                    response.push({'msg' : 'No Result Found'});
                }
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send(JSON.stringify(response));
            } else {
                res.status(400).send(err);
            }
        });
};