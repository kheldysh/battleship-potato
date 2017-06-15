/**
 * Created by jonasohman on 15/06/2017.
 */
var getRandomCoord = function (shootingHistory) {
    var x = randomizeNumber();
    while (!canShoot(shootingHistory[x])) {
        x = randomizeNumber();
    }
    var y = randomizeNumber();
    while(shootingHistory[x][y] !== NaN) {
        y = randomizeNumber();
    }
    return {x: x, y: y};
};

var randomizeNumber = function () {
    var min = Math.ceil(0);
    var max = Math.floor(10);
    return Math.floor(Math.random() * (max - min)) + min;;
};

var canShoot = function (column) {
    for(var y in column) {
        if (y === NaN) {
            return true;
        }
    }
    return false;
};