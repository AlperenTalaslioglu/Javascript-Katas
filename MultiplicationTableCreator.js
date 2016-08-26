/*
 * 
 * @author Alperen Talaslıoğlu - 
 * @date 26.08.2016
 * @contact alperen.talaslioglu@gmail.com
 *
 * Description: A multiplication table creator
 *
 * E.g
 *
 * multiplicationTable(2);
 *
 * -> output
 *
 *    1 2
 *    2 4
 *
 *
 */


var DEFAULT_SPACE_NUM = 5; // default space between table cells

/*
 * Generating a string as a multipication table
 * @param number
 * @return word reversed string
 */
function createMultiplicationTable(number) {
    DEFAULT_SPACE_NUM = getDigitCount(number * number) + 1; // dynamically set according to input value
    var multTable = '';
    for (var i = 1; i <= number; i++) {
        multTable += addSpace(i) + i;
        for (var j = 2; j <= number; j++) {
            multTable += addSpace(i * j) + (i * j);
        }
        multTable += '  \n';
    }
    return multTable;
}


/*
 * Get number of digits to add space according to digit nums
 * @param number
 * @return digit count
 */
function getDigitCount(number) {
    return number.toString().length;
}

/*
 * Adding necessary numbered spaces according to digit nums
 * @param number
 * @return string consist of spaces
 */
function addSpace(number) {
    return ' '.repeat(DEFAULT_SPACE_NUM - getDigitCount(number));
}


console.log(createMultiplicationTable(5));


