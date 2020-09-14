class resources {
    constructor(){

    }
}
class tile {
    /**
     * 
     * @param {resources} resources 
     */
    constructor (posistion , resources) {
        this.cells = []
        this.posistion = posistion
    }
    addCell(cell){
        this.cells.push(cell)
    }
    removeCell(cell){
        cellIndex = this.cells.findIndex((element) => element == cell)
        this.cells.splice(cellIndex)
    }
}
tiles = []
function createTiles(sizeX, sizeY) {
    for(x = 0; x < sizeX; x++){
        tiles[x] = []
        for(y = 0; y < sizeY; y++){
            tiles[x][y] = new tile(x, y, new resources())
        }
    }
}