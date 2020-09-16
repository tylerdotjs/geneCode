import { Tile } from './resourceTiles'

const Matter = require('matter-js')

export class Cell {
    constructor(position = Matter.Vector.create()) {
        let bodyCreateFunction = Cell.body.createFunction
        let bodyCreateFunctionParam = Cell.body.params
        this.body = bodyCreateFunction.apply(null, bodyCreateFunctionParam)
        Matter.Body.setPosition(this.body, position)
        Matter.World.add(Cell.world, this.body)
    }
    divide(offset = Matter.Vector.create(0,0)) {
        let pos = Matter.Vector.add(this.body.position, offset)
        let newCell = new Cell(pos)
        console.log(newCell)
        return newCell
    }
    findTile(){
        var bodyPos = this.body.position
        var adjustedVector = Matter.Vector.create(Math.floor(bodyPos.x), Math.floor(bodyPos.y))
        Matter.Vector.div(adjustedVector, Tile.scale)

        return Cell.tiles[adjustedVector.x][adjustedVector.y]
    }
    update(){
        //console.log(this.body.position)
    }
}
Cell.radius = 10
Cell.body = {createFunction: Matter.Bodies.circle, params: [0, 0, Cell.radius]}