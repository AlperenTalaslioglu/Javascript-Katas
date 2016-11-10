/**
 * @author Alperen Talaslıoğlu
 * @date 10.11.2016
 *
 * Multi dimensional array flat function in Javascript
 *
 * This is a console program which flattens multi dimensional arrays
 * Just include the js file and load your html page.
 *
 *
 *
 */


var multiDimensionalArray = [1, [12, [454, [2323, [3434]]]], 343, 55];

function flatten(arr, result) {

    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatten(arr[i], result);
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}


console.log(flatten(multiDimensionalArray, []))
