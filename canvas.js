var DRAWSCALE = 150
var newCanvas =
    $('<canvas />', { 'id': 'game'}).attr({'width': 400, 'height': 400})
$('body').append(newCanvas)
ctx = document.getElementById('game').getContext('2d')