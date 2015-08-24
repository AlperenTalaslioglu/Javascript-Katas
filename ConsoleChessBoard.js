/**
 * @author Alperen
 * 
 * Draw n x n dimension chessboard to console
 * 
 */

//Number of cells for dimension of board
var n = 8;

for(var i = 0; i < n; i++){
	var line = "";
	for(var j = 0; j < n; j++){
		line += ((i+j)%2 == 0) ? "#" : " ";
	}
	console.log(line);
}
