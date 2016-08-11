const LCD = {
    0: [
        [' ', '-', ' '],
        ['|', ' ', '|'],
        [' ', ' ', ' '],
        ['|', ' ', '|'],
        [' ', '-', ' '],
    ],
    1: [
        [' ', ' ', ' '],
        [' ', ' ', '|'],
        [' ', ' ', ' '],
        [' ', ' ', '|'],
        [' ', ' ', ' ']
    ],
    2: [
        [' ', '-', ' '],
        [' ', ' ', '|'],
        [' ', '-', ' '],
        ['|', ' ', ' '],
        [' ', '-', ' ']
    ],
    3: [
        [' ', '-', ' '],
        [' ', ' ', '|'],
        [' ', '-', ' '],
        [' ', ' ', '|'],
        [' ', '-', ' ']
    ],
    4: [
        [' ', ' ', ' '],
        ['|', ' ', '|'],
        [' ', '-', ' '],
        [' ', ' ', '|'],
        [' ', ' ', ' ']
    ],
    5: [
        [' ', '-', ' '],
        ['|', ' ', ' '],
        [' ', '-', ' '],
        [' ', ' ', '|'],
        [' ', '-', '']
    ],
    6: [
        [' ', '-', ' '],
        ['|', ' ', ' '],
        [' ', '-', ' '],
        ['|', ' ', '|'],
        [' ', '-', ' ']
    ],
    7: [
        [' ', '-', ' '],
        [' ', ' ', '|'],
        [' ', ' ', ' '],
        [' ', ' ', '|'],
        [' ', ' ', ' ']
    ],
    8: [
        [' ', '-', ' '],
        ['|', ' ', '|'],
        [' ', '-', ' '],
        ['|', ' ', '|'],
        [' ', '-', ' ']
    ],
    9: [
        [' ', '-', ' '],
        ['|', ' ', '|'],
        [' ', '-', ' '],
        [' ', ' ', '|'],
        [' ', '-', ' ']
    ]
};

function display(arrayInput) {
        arrayInput.forEach(function(row) {
        console.log(row.join(""));
    });
}

/* 
 * Repeats an array item at a given position N times.
 */
function repeatItemAtArrayIndex(array, position, times) {
    var items = [];
    var left = array.slice(0, position + 1);
    var right = array.slice(position + 1);
  
    for (var i = 0; i < times; i++) {
       items.push( array[position] );
    }

    return left.concat(items, right);
}

function scaleHorizontally(sizeOneDigit, sizeToScale) {
        
    return sizeOneDigit.map(function(row) {
        return row.slice(0, 2)        
            .concat(row[1].repeat(sizeToScale - 1).split(''))
            .concat(row.slice(2));
    });
}

function scaleVertically(horizontallyScaledDigit, sizeToScale) {
    
    var intermediateVerticallyScaledRow = repeatItemAtArrayIndex(horizontallyScaledDigit, 1, sizeToScale-1);
    var fullyScaledDigit = repeatItemAtArrayIndex(intermediateVerticallyScaledRow, sizeToScale + 2, sizeToScale-1);
    return fullyScaledDigit;
}

var scaleSize = 4;
for(var i = 0; i < 9; i++) {
    var num = LCD[i];
    var arrayResult = scaleHorizontally(num, scaleSize);
    display (scaleVertically(arrayResult, scaleSize));
    console.log(" ");
}
