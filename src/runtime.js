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
engine.world.gravity.y = 0

Cell.world = engine.world
const firstCellLocation = Matter.Vector.create(100, 100);
var firstCell = new Cell(firstCellLocation);

for(let i = 0; i < 100; i++){
    firstCell.divide()
}

Matter.Events.on(engine, 'beforeUpdate', () => {
    
})
Matter.Engine.run(engine);
Matter.Render.run(render);