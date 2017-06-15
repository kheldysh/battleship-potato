var express = require('express');
var app = express();

app.get('/start_game', function (req, res) {
    res.json({ someResponse: 1 });
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
