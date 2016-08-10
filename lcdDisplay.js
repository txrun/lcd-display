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

function scaleHorizontally(sizeOneDigit, sizeToScale) {
    return sizeOneDigit.map(function(row) {
        return row.slice(0, 2)        
            .concat(row[1].repeat(sizeToScale - 1).split(''))
            .concat(row.slice(2));
    });
}

function scaleVertically(horizontallyScaledDigit, sizeToScale) {
    return horizontallyScaledDigit.map(function(scaledRow, i, mainArray) {

       
        if( i === 3) {
           while(sizeToScale-1 > 0) {
                sizeToScale --;
                display (mainArray.splice(3, 0, scaledRow));
            } 
        }
    });
}

for(var i = 0; i < 9; i++) {
    var num = LCD[i];
    var arrayResult = scaleHorizontally(num, 3);
    scaleVertically(arrayResult, 3);
    console.log(i);
    console.log(arrayResult);
    display(arrayResult);
    console.log(" ");
}
