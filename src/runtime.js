const Matter = require('matter-js')
import { createTiles } from './resourceTiles.js';
import { Cell } from './cell.js';

const tiles = createTiles(10, 10);
var cells = [];
Cell.tiles = tiles;

var engine = Matter.Engine.create()
var render = Matter.Render.create({
    element: document.body,
    engine: engine
});
engine.world.gravity.y = 0;
engine.world.gravity.x = 0;

Cell.world = engine.world
const firstCellLocation = Matter.Vector.create(100, 100);
var firstCell = new Cell(firstCellLocation);

var loop = 0

Matter.Events.on(engine, 'beforeUpdate', () => {
    if(loop < 100){
        firstCell.divide()
    }
    loop++
})
Matter.Engine.run(engine);
Matter.Render.run(render);