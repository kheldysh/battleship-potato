require('randomizer');

/*
1. random shot
2. if hit, choose clockwise
3. if miss, choose clockwise from hit
4. if hit, continue direction
5. if sunk, go to 1
6. if miss, go to opposite direction from first hit
7. if hit another ship, mark ship down, go opposite from first hit

 */

// X = columns
// Y = rows

// var previousMove = {
//     event: 'HIT',
//     ship: '3',
//     target: {
//         x: 4,
//         y: 4
//     }
// };

// return the target for next move
var nextMove = function(previousMove, grid) {
    switch(previousMove.event) {
        case 'MISS':
            return getRandomField();
            break;
        case 'HIT':
            return nextClockwiseCoord(previousMove.target);
            break;
        case 'SUNK':
            return getRandomField();
            break;
    }
};

// from currentCoord, return next available neighboring coordinate clockwise, starting from top
var nextClockwiseCoord = function(currentCoord, statusGrid) {
    var currX = currentCoord.x;
    var currY = currentCoord.y;
    if (currY > 0 && isUnusedCoord(currX, currY-1)) {
        return { x: currX, y: currY-1 }
    } else if (currX < 9 && isUnusedCoord(currX+1, currY)) {
        return { x: currX+1, y: currY }
    } else if (currY < 9 && isUnusedCoord(currX, currY+1)) {
        return { x: currX, y: currY+1 }
    } else {
        return { x: currX-1, y: currY }
    }
};

// TODO check proper status
var isUnusedCoord = function(x, y, statusGrid) {
    return statusGrid[x][y] === 'UNKNOWN';
};