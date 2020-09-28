const Matter = require('matter-js')

export class Cell {
    constructor(position = Matter.Vector.create()) {
        let bodyCreateFunction = Cell.body.createFunction
        let bodyCreateFunctionParam = Cell.body.params
        this.body = bodyCreateFunction.apply(null, bodyCreateFunctionParam)
        Matter.Body.setPosition(this.body, position)
        Matter.World.add(Cell.world, this.body)
    }
    divide() {
        var offset = Matter.Vector.create(Math.sin(Math.random() * 6.3), Math.cos(Math.random() * 6.3))
        let pos = Matter.Vector.add(this.body.position, offset)
        let newCell = new Cell(pos)
        return newCell
    }
    update(){
        //console.log(this.body.position)
    }
}
Cell.radius = 10
Cell.body = {createFunction: Matter.Bodies.circle, params: [0, 0, Cell.radius]}