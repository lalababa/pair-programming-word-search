const transpose = function (matrix, word) {
  // Put your solution here
  let newStr = "";

  // let rowLength = matrix[0].length;
  // let columnLength = matrix.length;

  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      newStr += matrix[j][i];
    }
    if (newStr === word) return true;
    newStr = "";
  }


  return false;

};

module.exports = transpose;