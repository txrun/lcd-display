
var value = 148;
var defaultSize = 1;

function displayOne(){
  var one = [
    [' ',' ',' '],
    [' ',' ','|'],
    [' ',' ',' '],
    [' ',' ','|'],
    [' ',' ',' ']];
}

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


function scale(array, size){
  var scaledArray = [];
  var spaces = [];
  array.forEach(function(line, i, mainArray){
    var flag = 0;
    if(line.indexOf('|') === -1 && line.indexOf('-')=== -1){
      spaces = ' '.repeat(line.length + size -2);
      scaledArray.push(spaces.split(""));
    }
    else if (line.indexOf('|') >= 0) {
      line.splice(line.length-1, 0, ' ');
      scaledArray.push(line);
      scaledArray.push(line);
      
      // mainArray.splice(i, 0, line);
      // flag = 1;
    }
    else if (line.indexOf('-') > 0) {
      line.splice(line.length-1, 0, '-');
      scaledArray.push(line);
    }

    // if(flag === 1) {
    //   mainArray.splice(i, 0, line);

    // }
  });

  console.log(scaledArray);
}

function digitDisplay(digit){
  digit.forEach(function(line, i, linesArray)
  {
    var ch = line.join(" ");
    console.log(ch);
    // console.log(linesArray[i]);
  });
}

var displayDigit = digitDisplay(four);
var scaleDigit = scale(four, 3);
// var displayScaledDigit =  digitDisplay(scaleDigit);

// var digits = { 0 : [], 1 : [], 2: []}

// function scale(size = 2) { -->
//   <!-- // returns an array  -->
// <!-- } 