const Matter = require('matter-js')
export class Resources {
    constructor(){

    }
}
export class Tile {
    /**
     * 
     * @param {resources} Resources 
     */
    constructor (posistion , resources) {
        this.posistion = posistion
        this.resources = resources
    }
}
Tile.scale = 50;
export function createTiles(sizeX, sizeY) {
    var tiles = []
    for(let x = 0; x < sizeX; x++){
        tiles[x] = []
        for(let y = 0; y < sizeY; y++){
            tiles[x][y] = new Tile(Matter.Vector.create(), new Resources())
        }
    }
    return tiles;
}