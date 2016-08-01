
var value = 148;
var defaultSize = 1;

const numberToCharacterMap = {
  1 : [
    [' ',' ',' '],
    [' ',' ','|'],
    [' ',' ',' '],
    [' ',' ','|'],
    [' ',' ',' ']],
  4 : [
    [' ',' ',' '],
    ['|',' ','|'],
    [' ','-',' '],
    [' ',' ','|'],
    [' ',' ',' ']]
};  

  var four = [
    [' ',' ',' '],
    ['|',' ','|'],
    [' ','-',' '],
    [' ',' ','|'],
    [' ',' ',' ']];

  var eight = [
    [' ','-',' '],
    ['|',' ','|'],
    [' ','-',' '],
    ['|',' ','|'],
    [' ','-',' ']];


function displayDigit(characterArrays) {
  characterArrays.forEach(function(line, i, linesArray)
  {
    var ch = line.join(" ");
    console.log(ch);
  });
}

function scale(array, size){
  var scaledArray = [];
  var spaces = [];

  // array = numberToCharacterMap(4);
  array.forEach(function(line, i, mainArray){
    if(line.indexOf('|') === -1 && line.indexOf('-') === -1) {
      spaces = ' '.repeat(line.length + size -1);
      scaledArray.push(spaces.split(""));
    }
    else if (line.indexOf('|') >= 0) {
      var tempSize = size;
      while (tempSize-1 > 0) {
        line.splice(line.length-1, 0, ' ');
        tempSize --;
      }  
      tempSize = size;
      while(tempSize > 0) {
        scaledArray.push(line);
        tempSize --;
      }
    }
    else if (line.indexOf('-') > 0) {
      var tempSize = size;
      while(tempSize-1 > 0) {
        line.splice(line.length-1, 0, '-');
        tempSize --;
      }
      scaledArray.push(line);
    }
  });

  return scaledArray;
}

function displayScaledDigit(expandedCharacterArray) {
  expandedCharacterArray.forEach(function(line){
    var ch = line.join(" ");
    console.log(ch);
  });
}

var inputDigit = displayDigit(four);
var scaledDigit = scale(four, 5);
displayScaledDigit(scaledDigit);
// var displayScaledDigit =  displayDigit(scaleDigit);

// var digits = { 0 : [], 1 : [], 2: []}

// function scale(size = 2) { -->
//   <!-- // returns an array  -->
// <!-- } 