vMath = {}
cMath = {}
vMath.max = 1000 // Default max abs

vMath.Vector = class {
    constructor(x, y) {
        if (Math.abs(x) > vMath.max || Math.abs(y) > vMath.max) throw (`Vector size out of bounds, Max size set to ${vMath.max}`)
        this.x = x
        this.y = y
    }
    add(vector) {
        if (Math.abs(x) > vMath.max || Math.abs(y) > vMath.max) throw (`Vector size out of bounds, Max size set to ${vMath.max}`)
        if (!vector.x && !vector.y) throw ('Vector add operation requires x and y')
        this.x += vector.x
        this.y += vector.y
    }
    sub(vector) {
        if (Math.abs(x) > vMath.max || Math.abs(y) > vMath.max) throw (`Vector size out of bounds, Max size set to ${vMath.max}`)
        if (!vector.x && !vector.y) throw ('Vector subtract operation requires x and y')
        this.x -= vector.x
        this.y -= vector.y
    }
    clone(){
        return(new vMath.Vector(this.x, this.y))
    }
    static distance(vector1, vector2) {
        let v1 = vector1.clone()
        v1.sub(vector2)
        return (Math.sqrt(Math.pow(v1.x, 2) + Math.pow(v1.y, 2)))
    }
}
/**
 * @param {vMath.Vector} position1
 * @param {vMath.Vector} position2
 */
cMath.circleCircle = function (position1, position2, radius1, radius2) {
    let radius = radius1 + radius2
    let distance = vMath.Vector.distance(position1, position2)
    if (radius < distance) {
        return false
    } else {
        log(JSON.stringify(position1))
        let pos = position2.clone()
        pos.sub(position1)
        return (Math.atan(pos.y / pos.x))
    }
}

Array.prototype.removeByObject = function (object) {
    index = this.findIndex((element) => element == object)
    this.splice(index)
} 