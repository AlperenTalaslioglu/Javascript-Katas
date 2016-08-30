/*
 * Author:
 * Alperen Talaslıoğlu - 25.08.2016
 * alperen.talaslioglu@gmail.com
 *
 * Description: A word reverser that reverse all of the words the in a string
 * without changing their positions. Punctuation and all special characters will be ignored and not reversed.
 *
 * Algorithm :
 * It is reading string as char by char and push it to a stack until a special case is got caught.
 * When a special case got caught, stack is released by LIFO manner and the special character added end of string.
 * This process is going on until string read finish.
 *
 */




/*
 * Reversing the each words in string
 * @param str : Input string
 * @return word reversed string
 */
function reverseEachWord(str) {
    if (!isString(str) || str.length > 0) {return 'Invalid Input';}

    var reversedStr = '';
    var wordStack = [];

    str.split('').map(function (char) {
        if (isAlphabetic(char)) {
            wordStack.push(char);
        } else {
            reversedStr += wordStack.reverse().join('') + char; // release the word stack
            wordStack.length = 0; // reset word stack
        }
    });
    return reversedStr;
}


/*
 * Checking the input string or not
 * @param str : Input string
 * @return true / false
 */
function isString(str) {
    return typeof str === 'string' || str instanceof String;
}

/*
 * Checking the character alphabetic or not [ regex -> /[^a-zA-Z]/ ]
 * @param str : Input string
 * @return true / false
 */
function isAlphabetic(str) {
    return (str.charAt(0) >= 'A' && str.charAt(0) <= 'Z') || (str.charAt(0) >= 'a' && str.charAt(0) <= 'z');
}

var sentence = 'Thousands of requests are sent out each year, and as of 2011 about 220 proposals are returned.';
console.log(reverseEachWord(sentence));



