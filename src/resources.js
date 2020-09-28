const Matter = require('matter-js')
class Resource {
    constructor(name, amount, makeUp = [], amounts = null) {
        this.name = name
        this.amount = amount // To make it easy this is the max amount of particals that a cell can take in per cycle
        this.amountCells = 0
        this.makeUp = makeUp
        if (amounts == null) {
            this.makeUpAmounts = []
            this.makeUpAmounts.fill(1, 0, this.makeUp.length - 1)
        } else {
            this.makeUpAmounts = amounts
        }
    }
}
class Store {
    constructor(resources = []) {
        if (Array.isArray(resources)) {
            this.resources = resources
        } else {
            this.resources = [resources]
        }
    }

    findResource(name) {
        return this.resources.find(element => element.name == name)
    }

}

const envResources = [
    new Resource('oxygen', 1E5),
    new Resource('carbon', 10 ),
    new Resource('nitrogen', 1E9),
    new Resource('phosphorus', 100),
    new Resource('sulfur', 10 ),
    new Resource('sugar', 100)
]

var envroment = new Store(envResources)
console.log(envroment)

module.exports.Resource = Resource
module.exports.Store = Store
module.exports.envroment = envroment