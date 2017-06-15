require('./randomizer');

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

var strategy = {
    currentTargetShip: 0,
    currentHits: [],
    currentDirection: 'UP' // TODO fix better
};

var registerHit = function(target, strategy) {
    strategy.currentHits.push(previousMove.target);
};

var registerNewTargetShip = function(hittingMove, strategy) {
    strategy.currentTargetShip = hittingMove.ship;
};

// return the target for next move
var nextMove = function(previousMove, grid, strategy) {
    switch(previousMove.event) {
        case 'MISS':
            return getRandomCoord();
            break;
        case 'HIT':
            if (strategy.currentHits.length === 0) {
                strategy.currentHits.push(previousMove.target);
                return nextClockwiseCoord(previousMove.target, grid);
            } else {
                return nextClockwiseCoord(previousMove.target, grid);
            }
            break;
        case 'SUNK':
            return getRandomCoord();
            break;
    }
};

var nextTargetCoord = function(previousHitCoord, strategy) {
    switch(strategy.currentDirection) {
        case 'UP':
            break;
        case 'RIGHT':
            break;
        case 'DOWN':
            break;
        case 'LEFT':
            break;
    }
};

// from currentCoord, return next available neighboring coordinate clockwise, starting from top
var nextClockwiseCoord = function(currentCoord, statusGrid) {
    var currX = currentCoord.x;
    var currY = currentCoord.y;
    // try one above
    if (currY > 0 && isUnusedCoord(currX, currY-1, statusGrid)) {
        return { x: currX, y: currY-1 }
    // try right
    } else if (currX < 9 && isUnusedCoord(currX+1, currY, statusGrid)) {
        return { x: currX+1, y: currY }
    // try left
    } else if (currY < 9 && isUnusedCoord(currX, currY+1, statusGrid)) {
        return { x: currX, y: currY+1 }
    // only bottom left
    } else {
        return { x: currX-1, y: currY }
    }
};

// TODO check proper status
var isUnusedCoord = function(x, y, statusGrid) {
    return statusGrid === null || statusGrid[x][y] === 'UNKNOWN';
};

var isWithinGrid = function(x, y) {
    return x >= 0 && x <= 9 && y >= 0 && y <= 9;
};

module.exports = {
    nextMove: nextMove
};
