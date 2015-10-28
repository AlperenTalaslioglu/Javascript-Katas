
//Attributes
var sizeOfGrid = 4;
var cellSize = 240 / sizeOfGrid;

//Canvas fixed size
var width = 240;
var height = 240;

//Canvas Details
var canvas = document.getElementById("solutionCanvas");
var context = canvas.getContext("2d");

//Solutions
var emptyGrid = [];
var solutions = [];

//For Event handler
var currentSolution = 0;

function main(){
	drawGrid();
	generateEmptyGrid(emptyGrid);
	generateSolutions();
	drawCurrentSolution(currentSolution);
	fillNumOfSolutionsArea();
}

function fillNumOfSolutionsArea(){
	var str = sizeOfGrid + " x " + sizeOfGrid + " grid has " + ( solutions.length / 2 ) + " solutions."
	$('#numOfSolutions').text(str);
}

function drawCurrentSolution(solutionNumber){
	$('#solutionNum').text("Solution " + ((solutionNumber/2) + 1 )); // Show solution number

	hideArrow(solutionNumber); // Start and end point check
	var solution = solutions[solutionNumber];

	for(var i = 0; i < solution.length; i++){
		for(var j = 0; j < solution.length; j++){
			if(solution[i][j]){
				context.font = "30px Arial";
				var x = ( i * cellSize) + (cellSize / 2) - 10;
				var y = ( j * cellSize) + (cellSize / 2) + 10;
				context.fillText(solution[i][j],x,y);
			}
		}
	}
}

function hideArrow(solutionNumber){
	if(solutionNumber === 0){ $('#leftArrow').css("visibility", "hidden");}
	else if(solutionNumber === solutions.length - 2){ $('#rightArrow').css("visibility", "hidden");}
	else{
		$('#leftArrow').css("visibility", "visible");
		$('#rightArrow').css("visibility", "visible");
	}
}

function generateSolutions(){
	//Starting backtracking to all coordinates starting from (0,0)
	move(0,0,1,emptyGrid);
}

function move(x,y,index,emptyGrid){
	if(isMoveFunctInputsValid(x,y,index,grid)){return "Invalid Inputs";}

	var grid = jQuery.extend(true, [], emptyGrid); // Deep copy of grid to create totally independent solutions
	moveToTop(x,y,index,grid);
	moveToRight(x,y,index,grid);
	moveToBottom(x,y,index,grid);
	moveToLeft(x,y,index,grid);
}

function moveToTop(x,y,index,grid){
	if(isMoveFunctInputsValid(x,y,index,grid)){return "Invalid Inputs";}

	if(y === 0 || grid[x][y-1]){return;} //To top non-valid moves
	else{ // move
		grid[x][y-1] = ++index;
		move(x,(y-1),index,grid);
		grid[x][y-1] = 0;
	}
}

function moveToRight(x,y,index,grid){
	if(isMoveFunctInputsValid(x,y,index,grid)){return "Invalid Inputs";}

	if(isSolution(x,y)){ // Solution
		grid[x][y] = index;
		solutions.push(grid);
	}else if(x === (sizeOfGrid-1) || grid[x+1][y]){return;} // To right non-valid moves
	else{ // move
		grid[x+1][y] = ++index;
		move((x+1),y,index,grid);
		grid[x+1][y] = 0;
	}
}

function moveToBottom(x,y,index,grid){
	if(isMoveFunctInputsValid(x,y,index,grid)){return "Invalid Inputs";}

	if(isSolution(x,y)){ // Solution
		grid[x][y] = index;
		solutions.push(grid);
	}else if(y === (sizeOfGrid-1) || grid[x][y+1]){return;} // To bottom non-valid moves
	else{ // move
		grid[x][y+1] = ++index;
		move(x,(y+1),index,grid);
		grid[x][y+1] = 0;
	}
}

function moveToLeft(x,y,index,grid){
	if(isMoveFunctInputsValid(x,y,index,grid)){return "Invalid Inputs";}

	if(x === 0 || grid[x-1][y]){return;} // To left non-valid moves
	else{ // move
		grid[x-1][y] = ++index;
		move((x-1),y,index,grid);
		grid[x-1][y] = 0;
	}
}


function isSolution(x,y){
	return (x === (sizeOfGrid-1) && y == (sizeOfGrid-1));
}

function isMoveFunctInputsValid(x,y,index,grid){
	return (x === undefined || y === undefined || index === undefined || emptyGrid === undefined || x < 0 || y < 0 || index < 0 || emptyGrid.length === 0);
}


//Creating empty grid 
function generateEmptyGrid(emptyGrid){

	for(var i = 0; i < sizeOfGrid; i++){
		emptyGrid.push([]);// add new row to grid

		for(var j = 0; j < sizeOfGrid; j++){
			emptyGrid[i][j] = 0;
		}
	}

	//Starting point 
	emptyGrid[0][0] = 1;
}



//Draw grid and put start and end point on grid
function drawGrid(){

	//Draw X coordinated lines
	for(var x = 0; x <= width; x+=cellSize){
		context.moveTo(x, 0);
        context.lineTo(x, height);
	}

	//Draw Y coordinated lines
	for(var y = 0; y <= height; y+=cellSize){
		context.moveTo(0, y);
        context.lineTo(height,y);
	}

	context.strokeStyle = "black";
	context.stroke();

	drawCircle("start");
	drawCircle("end");
}


//Drawing the start and end points on grid
function drawCircle(type){
	if(type){
		var fillColor = (type === "start") ? "red" : "green";
		var coord = (type === "start") ? (cellSize / 2) : width - (cellSize / 2) ;
		var r = (cellSize / 2);
	}else{
		return "Empty Inputs";
	}

	context.beginPath();
	context.arc(coord,coord,r,0,2*Math.PI);
	context.fillStyle = fillColor;
    context.fill();
	context.strokeStyle = '#003300';
    context.stroke();

}

main();

function clearCanvas(){
	context.clearRect(0, 0, canvas.width, canvas.height);
}


function drawSolutionToCanvas(direction){
	
	// direction can be + or - 
	// + -> draw next solution
	// - -> draw previous solution

	clearCanvas()
	drawGrid();
	currentSolution += (direction === "-" ? -2 : 2);
	drawCurrentSolution(currentSolution);
}



///////Arrow Listeners


// Mouse Listeners

$( "#leftArrow" ).click(function() {
	if(currentSolution > 0){
		drawSolutionToCanvas("-");
	}
});


$( "#rightArrow" ).click(function() {
	if(currentSolution < solutions.length){
		drawSolutionToCanvas("+");
	}
});


// Key Listeners

$('body').keydown(function(e) {

	if(e.keyCode === 37){
		if(currentSolution > 0){
			drawSolutionToCanvas("-");
		}
	}else if(e.keyCode === 39){
		if(currentSolution < (solutions.length - 2)){
			drawSolutionToCanvas("+");
		}
	}

});
