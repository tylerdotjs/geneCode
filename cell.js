cellRadius = 0.01
class cell {
    constructor(position) {
        this.position = position
        this.tile = tiles[Math.floor(position.x)][Math.floor(position.y)]
        this.tile.addCell(this)
    }
    divide() {
        let pos = new vMath.Vector(cellRadius * 2, 0)
        pos.add(this.position)
        let newCell = new cell(pos)
        this.draw()
        return newCell
    }
    moveTo(position) {
        if (Math.floor(position.x) != Math.floor(this.position.x) || Math.floor(position.y) != Math.floor(this.position.y)) {
            this.tile.removeCell(this)
            this.tile = tiles[Math.floor(position.x)][Math.floor(position.y)]
        }
        this.position = position
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.position.x * DRAWSCALE, this.position.y * DRAWSCALE, cellRadius * DRAWSCALE, 0, 2 * Math.PI);
        ctx.stroke();
    }
    applyCollisions() {
        let cells = [...this.tile.cells]
        //cells.removeByObject(this)
        for(let i = 0; i < cells.length; i++){
            let cell = cells[i]
            log(JSON.stringify(this.position))
            let collisionInfo = cMath.circleCircle(this.position, cell.position, cellRadius, cellRadius)
            log(collisionInfo)
        }
        
    }
}