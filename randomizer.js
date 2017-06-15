/**
 * Created by jonasohman on 15/06/2017.
 */
var getRandomField = function () {
    var row = Math.floor(Math.random() * 9);
    var column = Math.floor(Math.random() * 9);

    return {row: row, column: column};
};