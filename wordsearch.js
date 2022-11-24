const transpose = require("./transpose.js")

const reverseString = (str) => {
    let newStr = "";
    for (let i = str.length-1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

const wordSearch = (letters, word) => {
    console.log(letters.length);

    
    if(letters.length === 0) {
        return undefined;
    }

    const reverseWord = reverseString(word);
    
    const horizontalJoin = letters.map(ls => ls.join(''));
    //console.log(horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word) || l.includes(reverseWord)) return true
        // console.log(l.reverse());
    }
    
    let verticalJoin = transpose(letters, word);
    console.log(verticalJoin);
    
    if(verticalJoin === false) verticalJoin = transpose(letters, reverseWord);
    console.log(verticalJoin);

    return verticalJoin;

}
module.exports = wordSearch

// let matrix = ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//              ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//              ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//              ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//              ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//              ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//              ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//              ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//              ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'];

// let word = "SEINFELD";
// let word2 = "EOUBWHYSA";

// console.log(wordSearch(matrix, word));
// console.log(wordSearch(matrix, word2));

// i= 1,  j = 1 || array[j][i]

// console.log(wordSearch([], undefined));

// (let word = "DLEFNIES";
// console.log(wordSearch(matrix, word));)

// console.log(reverseString("DLEFNIES"));
