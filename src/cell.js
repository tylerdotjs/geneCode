import { Tile } from './resourceTiles'

const Matter = require('matter-js')

export class Cell {
    constructor(position) {
        this.body = Cell.body
        this.body.position = position
        Matter.World.add(Cell.world, this.body)
    }
    divide() {
        let newCell = new Cell(Matter.Vector.clone(this.body.position))
        return newCell
    }
    findTile(){
        var bodyPos = this.body.position
        var adjustedVector = Matter.Vector.create(Math.floor(bodyPos.x), Math.floor(bodyPos.y))
        Matter.Vector.div(adjustedVector, Tile.scale)

        return Cell.tiles[adjustedVector.x][adjustedVector.y]
    }
}
Cell.radius = 10
Cell.body = Matter.Bodies.circle(0, 0, Cell.radius)