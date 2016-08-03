
// const readline = require('readLine');

var value = 148;
var defaultSize = 1;

const numberToCharacterMap = {
  1 : [
    [' ',' ',' '],
    [' ',' ','|'],
    [' ',' ',' '],
    [' ',' ','|'],
    [' ',' ',' ']],
  2 : [
    [' ','-',' '],
    [' ',' ','|'],
    [' ','-',' '],
    ['|',' ',' '],
    [' ','-',' ']],
  3 : [
    [' ','-',' '],
    [' ',' ','|'],
    [' ','-',' '],
    [' ',' ','|'],
    [' ','-',' ']],
  4 : [
    [' ',' ',' '],
    ['|',' ','|'],
    [' ','-',' '],
    [' ',' ','|'],
    [' ',' ',' ']],
  5 : [
    [' ','-',' '],
    ['|',' ',' '],
    [' ','-',' '],
    [' ',' ','|'],
    [' ','-','' ]],
  6 : [
    [' ','-',' '],
    ['|',' ',' '],
    [' ','-',' '],
    ['|',' ','|'],
    [' ','-',' ']],
  7 : [
    [' ','-',' '],
    [' ',' ','|'],
    [' ',' ',' '],
    [' ',' ','|'],
    [' ',' ',' ']],
  8 : [
    [' ','-',' '],
    ['|',' ','|'],
    [' ','-',' '],
    ['|',' ','|'],
    [' ','-',' ']],
  9 : [
    [' ','-',' '],
    ['|',' ','|'],
    [' ','-',' '],
    [' ',' ','|'],
    [' ','-',' ']] 
};  

function splitDigits(input) {
  var inputArray = [];
  while(input > 0) {
    inputArray.push(input % 10);
    input = parseInt(input/10);
  }
  inputArray.reverse();
  return inputArray;
}

function displayDigit(input) {

  var inputDigits = splitDigits(input);
  var mappedCharacterArray = inputDigits.map(function (currentValue, i) {
    var characterArray = numberToCharacterMap[currentValue];
    characterArray.forEach(function(line) {
      var ch = line.join("");
      console.log(ch);
    });    
  });
  return mappedCharacterArray;
}

//scales a single digit
function scale(input, scaleToSize){
  var scaledArray = [];
  var spaces = [];

  var digitArray = splitDigits(input);

  digitArray.forEach(function(value, i){

  var array = numberToCharacterMap[value];

  array.forEach(function(line){
    if(line.indexOf('|') === -1 && line.indexOf('-') === -1) {
      spaces = ' '.repeat(line.length + scaleToSize -1);
      scaledArray.push(spaces.split(""));
    }
    else if (line.indexOf('|') >= 0) {
      var tempSize = scaleToSize;
      while (tempSize-1 > 0) {
        line.splice(line.length-1, 0, ' ');
        tempSize --;
      }  
      tempSize = scaleToSize;
      while(tempSize > 0) {
        scaledArray.push(line);
        tempSize --;
      }
    }
    else if (line.indexOf('-') > 0) {
      var tempSize = scaleToSize;
      while(tempSize-1 > 0) {
        line.splice(line.length-1, 0, '-');
        tempSize --;
      }
      scaledArray.push(line);
    }
  });
  if( i === digitArray.length -1)
    displayScaledDigit(scaledArray);  
  });
  }

function displayScaledDigit(expandedCharacterArray) {
    expandedCharacterArray.forEach(function(line) {
    var ch = line.join("");
    console.log(ch);
  });
}

var inputNumber = 62;
displayDigit(inputNumber);
var scaledDigit = scale(823, 4);
// displayScaledDigit(scaledDigit);
