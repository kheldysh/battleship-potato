var express = require('express');
var range = require('lodash/range');
var app = express();

app.use('/index.html', express.static(__dirname + '/index.html'));

// function initShootingHistory() {
//     var a = new Array(10);
//     for (var i = 0; i < 10; i++) {
//         a[i] = new Array(10).fill(NaN);
//     }
//     return a;
// }
// var shootingHistory = initShootingHistory();
//
// var initialGrid = [].concat(row).map(function() {
//     return [].concat(row);
// });

var playerGrid;
var enemyGrid;
var MI = 0;
var HI = 1;
var row = [null, null, null, null, null];
// var initialGrid = [].concat(row).map(function() {
//     return [].concat(row);
// });

var NU = null;

var CA = 2;
var BA = 3;
var CR = 3;
var SU = 3;
var DE = 2;


var initialPlayerGrid = [
    [CA, CA, NU, BA, BA, BA, NU, NU, NU, NU],
    [NU, NU, NU, NU, NU, NU, NU, NU, NU, NU],
    [CR, NU, NU, NU, NU, NU, NU, NU, NU, NU],
    [CR, NU, NU, NU, NU, NU, NU, NU, NU, NU],
    [CR, NU, NU, NU, NU, NU, NU, NU, NU, NU],
    [NU, NU, NU, SU, SU, SU, NU, NU, NU, NU],
    [NU, NU, NU, NU, NU, NU, NU, NU, NU, NU],
    [NU, NU, NU, NU, NU, NU, NU, NU, NU, NU],
    [NU, NU, NU, NU, NU, NU, NU, NU, NU, DE],
    [NU, NU, NU, NU, NU, NU, NU, NU, NU, DE]
];

var initialEnemyGrid = [
    [CA, CA, NU, BA, BA, BA, NU, NU, NU, NU],
    [NU, NU, NU, NU, NU, NU, NU, NU, NU, NU],
    [CR, NU, NU, NU, NU, NU, NU, NU, NU, NU],
    [CR, NU, NU, NU, NU, NU, NU, NU, NU, NU],
    [CR, NU, NU, NU, NU, NU, NU, NU, NU, NU],
    [NU, NU, NU, SU, SU, SU, NU, NU, NU, NU],
    [NU, NU, NU, NU, NU, NU, NU, NU, NU, NU],
    [NU, NU, NU, NU, NU, NU, NU, NU, NU, NU],
    [NU, NU, NU, NU, NU, NU, NU, NU, NU, DE],
    [NU, NU, NU, NU, NU, NU, NU, NU, NU, DE]
];



// var ships = {
//   carrier: 5,
//   battleship: 4,
//   cruiser: 3,
//   submarine: 3,
//   destroyer: 2
// };

app.get('/start_game', function (req, res) {
    playerGrid = initialPlayerGrid;
    enemyGrid = initialEnemyGrid;

    // Object.keys(ships).map(function(shipName) {
    //     var shipSize = ships[shipName];
    //     // grid.forEach(function(_, gridRowIndex) {
    //     //     grid[gridRowIndex].forEach(function(_, gridCellIndex) {
    //     //        var cell = grid[gridRowIndex][gridCellIndex];
    //     //        console.log('cell', gridRowIndex, gridCellIndex);
    //     //     });
    //     // });
    // });

    res.json({ grid: enemyGrid.map(function(row) {
        return row.map(function(cell) {
            if (cell !== NU || cell !== MI || cell !== HI) {
                return NU;
            }
        });
    }) });
});

app.put('/next_turn', function (req, res) {

    // res.json({ nextTurn: 1 });
});

app.delete('/end_game', function (req, res) {
    res.json({ endGame: 1 });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
