
function reverseEachWord(str) {
    if (!isString(str) || str.length <= 0) {return 'Invalid Input';}

    var reversedStr = '';
    var wordStack = [];

    str.split('').map(function (char) {
        if(isAlphabetic(char)){
            wordStack.push(char);
        }else{
            reversedStr += wordStack.reverse().join('') + char;
            wordStack.length = 0;
        }
    });

    return reversedStr;
}


function isString(str) {
    return typeof str === 'string' || str instanceof String;
}

/*
 regex -> /[^a-zA-Z0-9]/
 */
function isAlphabetic(str) {
    return (str.charAt(0) >= 'A' && str.charAt(0) <= 'Z')
        || (str.charAt(0) >= 'a' && str.charAt(0) <= 'z');
}

var sentence = 'Thousands of requests are sent out each year, and as of 2011 about 220 proposals are returned.';
console.log(reverseEachWord(sentence));
