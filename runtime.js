createTiles(10, 10)
cell = new cell(new vMath.Vector(2, 2))
var loop = 0
var canvas = document.getElementById('game')
function update() {
    if (loop > 1000) return
    let newCell = cell.divide()
    if (loop > 4)(
        newCell.applyCollisions()
    )
    loop++
    window.requestAnimationFrame(update())
}
window.requestAnimationFrame(update())