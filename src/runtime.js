const Matter = require('matter-js')
import { createTiles } from './resources.js';
import { Cell } from './cell.js';

var cells = [];

var engine = Matter.Engine.create()
var render = Matter.Render.create({
    element: document.body,
    engine: engine
});
engine.world.gravity.y = 0;
engine.world.gravity.x = 0;

Cell.world = engine.world
const firstCellLocation = Matter.Vector.create(render.element.clientWidth / 2, render.element.clientHeight / 2);
var firstCell = new Cell(firstCellLocation);
Matter.Body.setStatic(firstCell.body, true)

var loop = 0

Matter.Events.on(engine, 'beforeUpdate', () => {
    if(loop < 1000){
        firstCell.divide()
    }
    loop++
})
Matter.Engine.run(engine);
Matter.Render.run(render);