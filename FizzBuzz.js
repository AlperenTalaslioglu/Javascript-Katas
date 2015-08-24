/**
 * @author Alperen
 * 
 * FizzBuzz Game implementation for division of 3 and 5
 * 
*/


for(var i = 1; i <= 100; i++){

	if((i % 3 == 0) && (i % 5 == 0)){
		console.log("FizzBuzz");
	}else if(i % 3 == 0){
		console.log("Fizz");
	}else if(i % 5 == 0){
		console.log("Buzz");
	}else{
		console.log(i);
	}
	
}
