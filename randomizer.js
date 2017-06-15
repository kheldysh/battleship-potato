/**
 * Created by jonasohman on 15/06/2017.
 */
var getRandomCoord = function (shootingHistory) {

    var coord = randomize();

    while (shootingHistory[coord.x, coord.y] !== NaN) {
        coord = randomize();
    }

    return coord;
};

var randomize = function () {
    return {x: Math.floor(Math.random() * 9), y: Math.floor(Math.random() * 9)} ;
}