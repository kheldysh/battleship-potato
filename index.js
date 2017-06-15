var express = require('express');
var range = require('lodash/range');
var app = express();

var grid;
var row = [null, null, null, null, null];
var initialGrid = [].concat(row).map(function() {
    return [].concat(row);
});


var ships = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 3
};

app.get('/start_game', function (req, res) {
    grid = initialGrid;
    res.json({ someResponse: initialGrid });
});

app.post('/next_turn', function (req, res) {
    res.json({ nextTurn: 1 });
});

app.post('/end_game', function (req, res) {
    res.json({ endGame: 1 });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
