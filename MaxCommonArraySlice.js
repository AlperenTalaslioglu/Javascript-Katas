/**
 * @author Alperen Talaslýoðlu
 * @date 25.08.2015
 *
 * Max Common Array Slice Implementation in Javascript
 *
 * This is a console program which shows the result in the browser console
 * Just include the js file and load your html page.
 * 
 * Algorithm is basicly checking the previous item and
 * continue until third different item try to be added solution.
 * Then new solution generate process starts. After all of the solutions generated,
 * algorithm finds the maximum length solution and return this.
 *
 *
 */

var inputArray = [53, 800, 0, 0, 0, 356, 8988, 1, 1];


//Implementation

var solutions = [];

function findCommonArraySlices(array) {
	if(!array || array === undefined || array ==='undefined' || array.length === 0){
		console.log("Invalid Input!");
		return;
	}
	

	for (var i = 0; i < array.length; i++) {
		//Current solution
		var solution = [];
		var coupleCounter = 0; // Maximum different element limit to solution 

		for (var j = i; j < array.length; j++) {
			//If previous element is same directly add it to solution. It means consecutive elements.
			if (isPreviousElementSame(solution, array[j])) {
				solution.push(array[j]);
			} else {
				//If there is no couple yet, just add and increase counter
				if (coupleCounter < 2) {
					solution.push(array[j]);
					coupleCounter++;
				} else {
					//If an element is not one of the couple, break and stop this solution
					if (solution.indexOf(array[j]) === -1) {
						break;
					} else {//If element is one of the couple, just add
						solution.push(array[j]);
					}
				}
			}
		}
		//If there is no couple, no solution.
		if (coupleCounter === 1) {
			break;
		}
		solutions.push(solution);
	}
	
	var max = getMaxCommonArraySliceLength();
	console.log(max);
}

function isPreviousElementSame(solution, element) {
	return (solution[solution.length - 1] === element);
}

function getMaxCommonArraySliceLength() {
	var max = 0;
	var maxSlice = [];
	for (var i = 0; i < solutions.length; i++) {
		if (max < solutions[i].length) {
			max = solutions[i].length;
			maxSlice = solutions[i];
		}
	}
	return maxSlice;
}

findCommonArraySlices(inputArray);